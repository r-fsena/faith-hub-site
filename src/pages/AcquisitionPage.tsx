import { useEffect, useState } from "react";
import {
  signUp,
  confirmSignUp,
  signIn,
  confirmSignIn,
  getCurrentUser,
  signOut,
  resendSignUpCode,
} from "aws-amplify/auth";
import { JOURNEY_API, journeyRequest } from "../publicAuth";
import "./acquisition.css";
interface Offer {
  id: string;
  name: string;
  monthly_price: number | null;
  max_members: number | null;
  max_campuses: number | null;
  features: string[];
  trial_available: boolean;
  requires_proposal: boolean;
  offer_revision: string;
}
interface Catalog {
  enabled: boolean;
  checkout: boolean;
  terms_version: string;
  plans: Offer[];
}
interface Request {
  id: string;
  mode: string;
  status: string;
  plan_id: string;
  church_name: string;
  organization_id: string | null;
  trial_expires_at: string | null;
  studio_url: string | null;
  proposal_id?: string | null;
  offer?: Offer;
}
const money = (n: number | null) =>
  n === null
    ? "Sob proposta"
    : n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const labels: Record<string, string> = {
  DRAFT: "Cadastro recebido",
  CHECKOUT_PENDING: "Aguardando confirmação do pagamento",
  TRIAL_REQUESTED: "Teste solicitado — aguardando aprovação",
  TRIAL_READY: "Seu teste foi preparado",
  TRIAL_ACTIVE: "Seu teste está ativo",
  ACTIVE: "Assinatura ativa",
};
export function AcquisitionPage({
  plansOnly = false,
}: {
  plansOnly?: boolean;
}) {
  const [catalog, setCatalog] = useState<Catalog | null>(null),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const [plan, setPlan] = useState("CONECTAR"),
    [mode, setMode] = useState("PAID"),
    [step, setStep] = useState<
      "account" | "verify" | "newPassword" | "details" | "status"
    >("account");
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [code, setCode] = useState(""),
    [name, setName] = useState(""),
    [church, setChurch] = useState(""),
    [phone, setPhone] = useState(""),
    [document, setDocument] = useState(""),
    [accepted, setAccepted] = useState(false),
    [login, setLogin] = useState(false),
    [request, setRequest] = useState<Request | null>(null);
  const [tracking, setTracking] = useState("");
  const selected = catalog?.plans.find((p) => p.id === plan);
  const summaryOffer = request?.offer || selected;
  const evaluating =
    mode === "TRIAL" && !request?.proposal_id && request?.status !== "ACTIVE";
  async function recover() {
    const data = await journeyRequest("/current");
    if (data.request) {
      setRequest(data.request);
      setPlan(data.request.plan_id);
      setMode(data.request.mode);
      setDocument(data.request.document || "");
      setStep("status");
    } else setStep("details");
  }
  useEffect(() => {
    let alive = true;
    fetch(`${JOURNEY_API}/public/journey/offers`)
      .then(async (response) => {
        if (!response.ok) throw Error("Não foi possível carregar as ofertas.");
        const data = await response.json();
        if (alive) setCatalog(data);
      })
      .catch((e) => alive && setError(e.message))
      .finally(() => alive && setLoading(false));
    if (typeof window !== "undefined") {
      const q = new URLSearchParams(window.location.search);
      const source = new URLSearchParams();
      for (const key of [
        "origem",
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
      ]) {
        if (q.has(key)) source.set(key, q.get(key)!.slice(0, 100));
      }
      setTracking(source.toString());
      const trial =
        window.location.pathname === "/teste-assistido" ||
        q.get("modo") === "teste";
      if (trial) setPlan("CONECTAR");
      else if (["CONECTAR", "CUIDAR", "GESTAO"].includes(q.get("plano") || ""))
        setPlan(q.get("plano")!);
      setMode(trial ? "TRIAL" : "PAID");
    }
    if (!plansOnly)
      void getCurrentUser()
        .then((user) => {
          if (alive) {
            setEmail(user.signInDetails?.loginId || "");
            void recover().catch(() => setStep("account"));
          }
        })
        .catch(() => {});
    return () => {
      alive = false;
    };
  }, [plansOnly]);
  useEffect(() => {
    if (
      !request ||
      !["CHECKOUT_PENDING", "TRIAL_REQUESTED"].includes(request.status)
    )
      return;
    let active = true;
    const timer = setInterval(() => {
      void journeyRequest(`/requests/${request.id}`)
        .then((data) => {
          if (active) setRequest(data.request);
        })
        .catch(() => {});
    }, 15000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [request?.id, request?.status]);
  async function authenticate(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (step === "verify") {
        await confirmSignUp({
          username: email.trim().toLowerCase(),
          confirmationCode: code,
        });
        await signIn({ username: email.trim().toLowerCase(), password });
        await recover();
      } else if (step === "newPassword") {
        await confirmSignIn({ challengeResponse: password });
        await recover();
      } else if (login) {
        const result = await signIn({
          username: email.trim().toLowerCase(),
          password,
        });
        if (
          result.nextStep.signInStep ===
          "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
        ) {
          setPassword("");
          setStep("newPassword");
        } else if (result.isSignedIn) await recover();
        else
          throw Error("Confirme seu acesso pelo Studio e volte a esta página.");
      } else {
        await signUp({
          username: email.trim().toLowerCase(),
          password,
          options: {
            userAttributes: { email: email.trim().toLowerCase(), name },
          },
        });
        setStep("verify");
      }
    } catch (e) {
      const code = (e as Error).name;
      if (code === "UserNotConfirmedException") setStep("verify");
      setError(
        code === "UsernameExistsException"
          ? "Este e-mail já tem uma conta. Escolha “Já tenho acesso” e entre."
          : code === "InvalidPasswordException"
            ? "Use ao menos 8 caracteres, com maiúscula, minúscula, número e símbolo."
            : code === "UserNotConfirmedException"
              ? "Confirme o código recebido por e-mail para continuar."
              : code === "NotAuthorizedException"
                ? "E-mail ou senha inválidos."
                : code === "CodeMismatchException"
                  ? "Código incorreto. Confira o e-mail."
                  : (e as Error).message || "Não foi possível autenticar.",
      );
    } finally {
      setBusy(false);
    }
  }
  async function create(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const q = new URLSearchParams(window.location.search);
      const source = Object.fromEntries(
        ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
          .filter((k) => q.has(k))
          .map((k) => [k, q.get(k)]),
      );
      const result = await journeyRequest("/requests", {
        plan_id: plan,
        mode,
        offer_revision: catalog?.plans.find(
          (p) => p.id === (mode === "TRIAL" ? "CONECTAR" : plan),
        )?.offer_revision,
        church_name: church,
        contact_name: name,
        contact_phone: phone,
        document,
        termsAccepted: accepted,
        terms_version: catalog?.terms_version,
        source: {
          origin: q.get("origem") || window.location.pathname,
          ...source,
        },
      });
      setRequest(result.request);
      setStep("status");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function checkout() {
    if (!request) return;
    setBusy(true);
    setError("");
    try {
      const result = await journeyRequest(`/requests/${request.id}/checkout`, {
        plan_id: plan,
        offer_revision: catalog?.plans.find((p) => p.id === plan)
          ?.offer_revision,
        document,
        termsAccepted: accepted,
        terms_version: catalog?.terms_version,
      });
      if (result.status === "PAID") {
        await recover();
        return;
      }
      const url = new URL(result.payment_link);
      if (
        url.protocol !== "https:" ||
        ![
          "asaas.com",
          "www.asaas.com",
          "sandbox.asaas.com",
          "www.sandbox.asaas.com",
        ].includes(url.hostname)
      )
        throw Error("O provedor não retornou um endereço de pagamento válido.");
      window.location.assign(url.href);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  const highlights = (offer: Offer) => {
    const baseId =
      offer.id === "CUIDAR"
        ? "CONECTAR"
        : ["GESTAO", "ENTERPRISE_2026"].includes(offer.id)
          ? "CUIDAR"
          : null;
    const base = new Set(
      catalog?.plans.find((p) => p.id === baseId)?.features || [],
    );
    const unique = offer.features.filter((item) => !base.has(item));
    return (unique.length ? unique : offer.features).slice(0, 4);
  };
  const offers = (
    <div className="acq-offers">
      {catalog?.plans.map((p) => (
        <article
          key={p.id}
          className={`acq-offer ${p.id === "CUIDAR" ? "acq-recommended" : ""}`}
        >
          <span className="acq-kicker">
            {p.trial_available
              ? "14 dias de teste assistido"
              : p.id === "ENTERPRISE_2026"
                ? "Atendimento consultivo"
                : "Contratação com pagamento"}
          </span>
          <h2>{p.name}</h2>
          <div className="acq-price">
            {money(p.monthly_price)}
            {p.monthly_price !== null && <small>/mês</small>}
          </div>
          <p>
            {p.max_members
              ? `Até ${Number(p.max_members).toLocaleString("pt-BR")} membros no total`
              : "Capacidade definida na proposta"}
            <br />
            {p.max_campuses
              ? `${p.max_campuses} unidade(s), incluindo a sede`
              : "Unidades conforme contratação"}
          </p>
          <ul>
            {highlights(p).map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          {p.requires_proposal ? (
            <a
              className="acq-btn acq-secondary"
              href="https://api.whatsapp.com/send?phone=5548991079478&text=Quero%20uma%20proposta%20Enterprise%20Faith%20Hubs"
            >
              Falar sobre Enterprise
            </a>
          ) : (
            <>
              <a
                className="acq-btn"
                href={`/contratar?plano=${p.id}${tracking ? `&${tracking}` : ""}`}
              >
                Contratar {p.name}
              </a>
              {p.trial_available && (
                <a
                  className="acq-btn acq-secondary"
                  href={`/teste-assistido${tracking ? `?${tracking}` : ""}`}
                >
                  Solicitar teste de 14 dias
                </a>
              )}
            </>
          )}
        </article>
      ))}
    </div>
  );
  return (
    <section className="acq-page">
      <div className="acq-heading">
        <span className="acq-kicker">FAITH HUBS · COMECE POR AQUI</span>
        <h1>
          {plansOnly
            ? "Um plano para a sua igreja"
            : step === "status"
              ? "Acompanhe sua ativação"
              : mode === "TRIAL"
                ? "Experimente o Conectar com acompanhamento"
                : "Crie o ambiente da sua igreja"}
        </h1>
        <p>
          {plansOnly
            ? "Uma assinatura por organização. Escolha os módulos e organize suas unidades."
            : mode === "TRIAL"
              ? "14 dias, uma unidade e até 300 membros. Sem cartão ou cobrança automática."
              : "Escolha sua oferta, confirme seu acesso e continue no pagamento seguro."}
        </p>
      </div>
      {plansOnly && error && (
        <div role="alert" className="acq-error">
          {error}{" "}
          <button className="acq-link" onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </div>
      )}
      {loading ? (
        <p role="status">Carregando ofertas…</p>
      ) : plansOnly ? (
        offers
      ) : (
        <div className="acq-layout">
          <div className="acq-form-card">
            {!catalog?.enabled ? (
              <p>
                A jornada está temporariamente indisponível.{" "}
                <a href="/planos">Veja os planos</a> ou fale com nossa equipe.
              </p>
            ) : step === "account" ||
              step === "verify" ||
              step === "newPassword" ? (
              <form onSubmit={authenticate}>
                <div className="acq-step">1 de 3 · Seu acesso</div>
                <h2>
                  {step === "verify"
                    ? "Confirme seu e-mail"
                    : step === "newPassword"
                      ? "Defina sua senha pessoal"
                      : login
                        ? "Entre com sua conta"
                        : "Crie seu acesso"}
                </h2>
                {step === "account" && (
                  <>
                    <label>
                      E-mail
                      <input
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    {!login && (
                      <label>
                        Seu nome
                        <input
                          required
                          autoComplete="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                    )}
                  </>
                )}
                {step !== "verify" ? (
                  <label>
                    {step === "newPassword" ? "Nova senha" : "Senha"}
                    <input
                      type="password"
                      autoComplete={login ? "current-password" : "new-password"}
                      minLength={8}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <small>
                      8 ou mais caracteres, maiúscula, minúscula, número e
                      símbolo.
                    </small>
                  </label>
                ) : (
                  <>
                    <p>
                      Enviamos um código para {email}. Confira também a caixa de
                      spam.
                    </p>
                    <label>
                      Código de confirmação
                      <input
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        required
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </label>
                    <button
                      type="button"
                      className="acq-link"
                      disabled={busy}
                      onClick={() => {
                        void resendSignUpCode({ username: email })
                          .then(() =>
                            setError(
                              "Novo código solicitado. Confira seu e-mail.",
                            ),
                          )
                          .catch(() =>
                            setError(
                              "Não foi possível reenviar agora. Aguarde e tente novamente.",
                            ),
                          );
                      }}
                    >
                      Reenviar código
                    </button>
                  </>
                )}
                <button className="acq-btn" disabled={busy}>
                  {busy
                    ? "Aguarde…"
                    : step === "verify"
                      ? "Confirmar e continuar"
                      : login
                        ? "Entrar"
                        : "Continuar"}
                </button>
                {step === "account" && (
                  <button
                    type="button"
                    className="acq-link"
                    onClick={() => {
                      setLogin(!login);
                      setError("");
                    }}
                  >
                    {login ? "Criar uma conta" : "Já tenho acesso"}
                  </button>
                )}
              </form>
            ) : step === "details" ? (
              <form onSubmit={create}>
                <div className="acq-step">2 de 3 · Igreja e oferta</div>
                <h2>Configure sua contratação</h2>
                <p className="acq-note">E-mail confirmado: {email}</p>
                <label>
                  Nome da igreja
                  <input
                    required
                    minLength={2}
                    value={church}
                    onChange={(e) => setChurch(e.target.value)}
                  />
                </label>
                <label>
                  Responsável pelo ambiente
                  <input
                    required
                    minLength={2}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  WhatsApp
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                {mode === "PAID" && (
                  <>
                    <label>
                      Plano
                      <select
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                      >
                        {catalog?.plans
                          .filter((p) => !p.requires_proposal)
                          .map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} · {money(p.monthly_price)}/mês
                            </option>
                          ))}
                      </select>
                    </label>
                    <label>
                      CPF ou CNPJ da cobrança
                      <input
                        required
                        inputMode="numeric"
                        value={document}
                        onChange={(e) => setDocument(e.target.value)}
                      />
                    </label>
                  </>
                )}
                <label className="acq-check">
                  <input
                    type="checkbox"
                    required
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <span>
                    Li e aceito as{" "}
                    <a
                      href="/condicoes-de-contratacao"
                      target="_blank"
                      rel="noreferrer"
                    >
                      condições da oferta
                    </a>
                    {mode === "PAID"
                      ? " e a cobrança mensal recorrente."
                      : ". O prazo começa após a preparação e confirmação do acesso."}
                  </span>
                </label>
                <button className="acq-btn" disabled={busy}>
                  {busy
                    ? "Salvando…"
                    : mode === "TRIAL"
                      ? "Solicitar teste assistido"
                      : "Revisar e seguir para pagamento"}
                </button>
                <button
                  type="button"
                  className="acq-link"
                  onClick={() => {
                    void signOut()
                      .then(() => {
                        setStep("account");
                        setPassword("");
                      })
                      .catch(() =>
                        setError(
                          "Não foi possível sair agora. Tente novamente.",
                        ),
                      );
                  }}
                >
                  Trocar conta
                </button>
              </form>
            ) : (
              request && (
                <div className="acq-status">
                  <div className="acq-step">3 de 3 · Ativação</div>
                  <h2>{labels[request.status] || "Acompanhe seu pedido"}</h2>
                  <p>
                    <strong>{request.church_name}</strong>
                  </p>
                  {request.status === "TRIAL_REQUESTED" ? (
                    <p>
                      Recebemos sua solicitação de teste do Conectar. Nossa
                      equipe vai alinhar a preparação com você. Os 14 dias ainda
                      não começaram.
                    </p>
                  ) : request.organization_id &&
                    ["TRIAL_READY", "TRIAL_ACTIVE", "ACTIVE"].includes(
                      request.status,
                    ) ? (
                    <>
                      <p>
                        Seu ambiente está pronto. Entre no Studio com o mesmo
                        e-mail e senha cadastrados aqui. A sede já foi criada;
                        você poderá confirmá-la no onboarding.
                      </p>
                      {request.trial_expires_at && (
                        <p>
                          Teste até{" "}
                          {new Date(
                            request.trial_expires_at,
                          ).toLocaleDateString("pt-BR")}
                          .
                        </p>
                      )}
                      <a
                        className="acq-btn"
                        href="https://studio.faithhubs.com"
                      >
                        Acessar meu Studio
                      </a>
                      {request.mode === "TRIAL" &&
                        request.status !== "ACTIVE" && (
                          <details>
                            <summary>
                              Contratar agora e manter meus dados
                            </summary>
                            <p>
                              Escolha o plano. A assinatura será ativada somente
                              após a confirmação do pagamento; sua igreja e seus
                              dados serão mantidos.
                            </p>
                            <label>
                              Plano
                              <select
                                value={plan}
                                onChange={(e) => setPlan(e.target.value)}
                              >
                                {catalog?.plans
                                  .filter((p) => !p.requires_proposal)
                                  .map((p) => (
                                    <option key={p.id} value={p.id}>
                                      {p.name} · {money(p.monthly_price)}/mês
                                    </option>
                                  ))}
                              </select>
                            </label>
                            <label>
                              CPF/CNPJ
                              <input
                                value={document}
                                onChange={(e) => setDocument(e.target.value)}
                              />
                            </label>
                            <label className="acq-check">
                              <input
                                type="checkbox"
                                checked={accepted}
                                onChange={(e) => setAccepted(e.target.checked)}
                              />
                              <span>
                                Aceito as condições da oferta e a cobrança
                                mensal recorrente.
                              </span>
                            </label>
                            <button
                              className="acq-btn"
                              disabled={busy || !accepted || !catalog?.checkout}
                              onClick={() => void checkout()}
                            >
                              Continuar no pagamento
                            </button>
                          </details>
                        )}
                    </>
                  ) : (
                    <>
                      <p>
                        O ambiente será criado após a confirmação do pagamento
                        pelo provedor. Recarregar esta página não cria uma nova
                        assinatura.
                      </p>
                      <button
                        className="acq-btn"
                        disabled={busy || !catalog?.checkout}
                        onClick={() => void checkout()}
                      >
                        {busy ? "Abrindo…" : "Continuar no checkout seguro"}
                      </button>
                      {!catalog?.checkout && (
                        <p>
                          O pagamento online está temporariamente indisponível.
                          Sua solicitação foi preservada.
                        </p>
                      )}
                    </>
                  )}
                  <button
                    className="acq-link"
                    disabled={busy}
                    onClick={() => {
                      setBusy(true);
                      void recover()
                        .catch((e) => setError(e.message))
                        .finally(() => setBusy(false));
                    }}
                  >
                    Atualizar situação
                  </button>
                </div>
              )
            )}
            {error && (
              <div role="alert" className="acq-error">
                {error}
              </div>
            )}
          </div>
          <aside className="acq-summary">
            <span className="acq-kicker">SUA OFERTA</span>
            <h2>
              {catalog?.plans.find(
                (p) =>
                  p.id ===
                  (request?.plan_id || (mode === "TRIAL" ? "CONECTAR" : plan)),
              )?.name || "Conectar"}
            </h2>
            <div className="acq-price">
              {evaluating
                ? "14 dias de avaliação"
                : money(summaryOffer?.monthly_price ?? null)}
            </div>
            <p>
              {evaluating
                ? "Teste assistido, sem cartão."
                : "Assinatura mensal da organização."}
            </p>
            <ul>
              {summaryOffer?.features.slice(0, 5).map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
            <p className="acq-note">
              {evaluating
                ? "Somente Conectar: uma unidade e 300 membros."
                : "Conectar e Cuidar incluem uma unidade. Gestão inclui até cinco, contando a sede."}{" "}
              Configuração assistida e serviços adicionais seguem o escopo
              combinado.
            </p>
            <a className="acq-link" href="/planos">
              Comparar todos os planos →
            </a>
          </aside>
        </div>
      )}
    </section>
  );
}
