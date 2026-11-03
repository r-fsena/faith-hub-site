// Actual site UI with isolated Cognito/API mocks; never sends invitations or charges.
const fs = require("node:fs"),
  path = require("node:path"),
  assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const puppeteer = require(process.env.PUPPETEER_MODULE || "puppeteer-core");
const root = process.env.SITE_TEST_ROOT || path.resolve(__dirname, "..");
const port = 5197,
  origin = `http://127.0.0.1:${port}`,
  out = "/tmp/faith-hub-public-journey";
const mock = path.join(root, ".journey-auth.ts"),
  config = path.join(root, ".journey-test.config.mjs");
let server,
  browser,
  page,
  log = "";
const errors = [];
const catalog = require("../../faith-hub-backend/src/config/commercialPlans.json");
const offers = {
  enabled: true,
  checkout: true,
  terms_version: "2026-11-03",
  plans: catalog.plans.map((p) => ({
    ...p,
    trial_available: p.id === "CONECTAR",
    offer_revision: "reviewed-" + p.id,
  })),
};
const click = async (text) => {
  const found = await page.evaluate((text) => {
    const b = [...document.querySelectorAll("button")].find(
      (b) => b.textContent.trim() === text,
    );
    if (!b) return false;
    b.click();
    return true;
  }, text);
  assert.ok(found, text);
};
const fill = async (label, value) => {
  const input = await page.evaluateHandle(
    (label) =>
      [...document.querySelectorAll("label")]
        .find((l) => l.childNodes[0]?.textContent.trim() === label)
        ?.querySelector("input"),
    label,
  );
  assert.ok(input.asElement(), label);
  await input.asElement().type(value);
};
(async () => {
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(
    mock,
    `let signed=false;export async function getCurrentUser(){if(!signed)throw Error('No session');return {signInDetails:{loginId:'owner@example.test'}};}export async function signUp(){window.__signup=(window.__signup||0)+1;return {};}export async function confirmSignUp(){return {};}export async function signIn(){signed=true;return {isSignedIn:true};}export async function confirmSignIn(){signed=true;return {};}export async function signOut(){signed=false;}export async function resendSignUpCode(){}export async function fetchAuthSession(){return {tokens:{idToken:{toString:()=> 'isolated-owner'}}};}`,
  );
  fs.writeFileSync(
    config,
    `import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';export default defineConfig({plugins:[react()],server:{hmr:false,watch:null},resolve:{alias:{'aws-amplify/auth':${JSON.stringify(mock)}}}});`,
  );
  server = spawn(
    process.execPath,
    [
      path.join(root, "node_modules/vite/bin/vite.js"),
      "--host",
      "127.0.0.1",
      "--port",
      String(port),
      "--strictPort",
      "--config",
      config,
    ],
    {
      cwd: root,
      env: { ...process.env, VITE_API_URL: "https://journey-api.example.test" },
      stdio: "pipe",
    },
  );
  server.stdout.on("data", (d) => (log += d));
  server.stderr.on("data", (d) => (log += d));
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch(origin)).ok) break;
    } catch {}
    if (server.exitCode !== null) throw Error(log);
    await new Promise((r) => setTimeout(r, 150));
  }
  browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  for (const test of [
    { plan: "CONECTAR", trial: true, width: 1440 },
    { plan: "CUIDAR", width: 1440 },
    { plan: "GESTAO", width: 390 },
    { plan: "CONECTAR", trial: true, width: 390 },
  ]) {
    const context = await browser.createBrowserContext();
    page = await context.newPage();
    page.setDefaultTimeout(30000);
    await page.setViewport({ width: test.width, height: 1000 });
    page.on("pageerror", (e) => errors.push(e.message));
    let request = null,
      submitted = null,
      checkout = null,
      providerCalls = 0;
    await page.setRequestInterception(true);
    page.on("request", (r) => {
      const u = new URL(r.url());
      if (u.origin === origin || u.protocol === "data:")
        return void r.continue();
      if (u.hostname === "asaas.com") {
        if (r.isNavigationRequest()) providerCalls++;
        return void r.respond({
          status: 200,
          contentType: "text/html",
          body: "<h1>Checkout isolado</h1>",
        });
      }
      if (u.hostname !== "journey-api.example.test") return void r.abort();
      let body = {},
        status = 200;
      if (u.pathname.endsWith("/offers")) body = offers;
      else if (u.pathname.endsWith("/current")) body = { request };
      else if (r.method() === "POST" && u.pathname.endsWith("/checkout")) {
        checkout = JSON.parse(r.postData());
        body = {
          payment_link: "https://asaas.com/checkoutSession/show?id=isolated",
        };
      } else if (r.method() === "POST" && u.pathname.endsWith("/requests")) {
        submitted = JSON.parse(r.postData());
        assert.equal(r.headers().authorization, "Bearer isolated-owner");
        request = {
          id: "11111111-1111-1111-1111-111111111111",
          plan_id: submitted.plan_id,
          mode: submitted.mode,
          status: submitted.mode === "TRIAL" ? "TRIAL_REQUESTED" : "DRAFT",
          church_name: submitted.church_name,
          organization_id: null,
          offer: offers.plans.find((p) => p.id === submitted.plan_id),
        };
        body = { request };
      } else body = { request };
      void r.respond({
        status,
        contentType: "application/json",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "content-type,authorization",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        },
        body: JSON.stringify(body),
      });
    });
    await page.goto(origin + "/planos", { waitUntil: "networkidle0" });
    await page.waitForSelector(".acq-offer");
    assert.equal((await page.$$(".acq-offer")).length, 4);
    assert.equal((await page.$$('a[href="/teste-assistido"]')).length, 1);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    await page.screenshot({
      path: `${out}/plans-${test.width}.png`,
      fullPage: true,
    });
    await page.goto(
      origin +
        (test.trial
          ? "/teste-assistido?plano=CUIDAR"
          : `/contratar?plano=${test.plan}`),
      { waitUntil: "networkidle0" },
    );
    await fill("E-mail", "owner@example.test");
    await fill("Seu nome", "Responsável");
    await fill("Senha", "TesteForte1!");
    await click("Continuar");
    await page.waitForSelector('input[autocomplete="one-time-code"]');
    await fill("Código de confirmação", "123456");
    await click("Confirmar e continuar");
    await page.waitForFunction(() =>
      [...document.querySelectorAll("label")].some((l) =>
        l.textContent.startsWith("Nome da igreja"),
      ),
    );
    await fill("Nome da igreja", "Igreja de Teste");
    if (!(await page.$eval(".acq-form-card input", (e) => e.value)))
      throw Error("Missing name");
    if (!test.trial) await fill("CPF ou CNPJ da cobrança", "52998224725");
    await page.click(".acq-check input");
    await page.screenshot({
      path: `${out}/${test.plan}-${test.width}-details.png`,
      fullPage: true,
    });
    await click(
      test.trial
        ? "Solicitar teste assistido"
        : "Revisar e seguir para pagamento",
    );
    await page.waitForSelector(".acq-status");
    assert.equal(submitted.plan_id, test.plan);
    assert.equal(submitted.mode, test.trial ? "TRIAL" : "PAID");
    assert.equal(submitted.offer_revision, "reviewed-" + test.plan);
    assert.equal("monthly_amount" in submitted, false);
    assert.equal(providerCalls, 0);
    if (test.trial) {
      assert.equal(await page.$(".acq-status .acq-btn"), null);
      request = {
        ...request,
        status: "TRIAL_READY",
        organization_id: "org-test",
        studio_url: "https://studio.faithhubs.com",
      };
      await click("Atualizar situação");
      await page.waitForSelector('a[href="https://studio.faithhubs.com"]');
      assert.match(
        await page.$eval(".acq-status", (e) => e.textContent),
        /mesmo e-mail e senha/,
      );
    } else {
      await click("Continuar no checkout seguro");
      await page.waitForFunction(() => location.hostname === "asaas.com");
      assert.equal(providerCalls, 1);
      assert.equal(checkout.plan_id, test.plan);
    }
    await context.close();
    page = null;
    console.log(
      `PASS ${test.plan} ${test.trial ? "trial" : "paid"} ${test.width}px: signup, confirmation, consent, snapshot, activation/payment`,
    );
  }
  assert.deepEqual(errors, []);
  console.log("PASS: no real emails, users or charges; screenshots " + out);
})()
  .catch(async (e) => {
    console.error(e);
    console.error(log.slice(-1500));
    if (page) {
      console.error(
        (await page.evaluate(() => document.body.innerText)).slice(-2000),
      );
      await page.screenshot({ path: out + "/failure.png", fullPage: true });
    }
    process.exitCode = 1;
  })
  .finally(async () => {
    if (browser) await browser.close();
    if (server) server.kill();
    for (const f of [mock, config]) fs.rmSync(f, { force: true });
  });
