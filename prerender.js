import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Make sure to run `vite build` first.');
    process.exit(1);
  }

  const ssrEntryPath = path.resolve(__dirname, 'dist-ssr/entry-server.js');
  if (!fs.existsSync(ssrEntryPath)) {
    console.error('dist-ssr/entry-server.js not found! Make sure to build SSR bundle first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(pathToFileURL(ssrEntryPath).href);
  const appHtml = render();

  // Injetar HTML no #root
  const renderedHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(templatePath, renderedHtml, 'utf-8');
  console.log('✅ Pre-rendering completed: Injected static HTML into dist/index.html');

  // Limpar diretório dist-ssr temporário
  fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error('Pre-rendering error:', err);
  process.exit(1);
});
