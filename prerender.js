import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  {
    path: '/',
    outDir: 'dist',
    title: 'Faith Hub — Sistema de Gestão para Igrejas e App de Membros',
    description: 'Sistema de gestão para igrejas com app de membros, Bíblia 100% offline, check-in Kids, dízimo via PIX e gestão multi-campus. Peça uma demonstração.',
    canonical: 'https://faithhubs.com/'
  },
  {
    path: '/kids',
    outDir: 'dist/kids',
    title: 'Check-in Kids para Igrejas e Ministério Infantil Seguro | Faith Hub',
    description: 'Sistema de check-in infantil para igrejas com totem, impressão de etiquetas, PIN de segurança de 4 dígitos, crachás digitais e controle rigoroso de devolução.',
    canonical: 'https://faithhubs.com/kids'
  },
  {
    path: '/dizimos-pix',
    outDir: 'dist/dizimos-pix',
    title: 'Dízimo via PIX para Igrejas com Conciliação Automática | Faith Hub',
    description: 'Receba dízimos e ofertas por PIX com chave dinâmica, QR Code por congregação/filial, conciliação bancária automática e emissão de comprovantes direto no app dos membros.',
    canonical: 'https://faithhubs.com/dizimos-pix'
  },
  {
    path: '/biblia-offline',
    outDir: 'dist/biblia-offline',
    title: 'Bíblia Sagrada 100% Offline no App da sua Igreja | Faith Hub',
    description: 'Bíblia digital completa sem necessidade de internet: 66 livros, 1.189 capítulos, traduções NVI, ACF e Almeida Atualizada no aplicativo dos seus membros.',
    canonical: 'https://faithhubs.com/biblia-offline'
  },
  {
    path: '/multi-campus',
    outDir: 'dist/multi-campus',
    title: 'Sistema de Gestão Multi-Campus para Redes de Igrejas | Faith Hub',
    description: 'Gerencie sede e filiais em uma única plataforma blindada: dados segregados por congregação, consolidação financeira para a liderança geral e relatórios unificados.',
    canonical: 'https://faithhubs.com/multi-campus'
  },
  {
    path: '/celulas',
    outDir: 'dist/celulas',
    title: 'Gestão de Células, Pequenos Grupos e Escala de Voluntários | Faith Hub',
    description: 'Organize reuniões de células, relatórios de frequência, pedidos de oração e escalas de ministérios em tempo real com o Cell Workspace Studio do Faith Hub.',
    canonical: 'https://faithhubs.com/celulas'
  },
  {
    path: '/eventos-ingressos',
    outDir: 'dist/eventos-ingressos',
    title: 'Ingressos Digitais e Portaria QR Code para Eventos da Igreja | Faith Hub',
    description: 'Inscrições em conferências e congressos da igreja com QR Code na carteira digital dos membros, zero taxas abusivas e portaria ágil validada em 1 segundo.',
    canonical: 'https://faithhubs.com/eventos-ingressos'
  },
  {
    path: '/cantina-livraria',
    outDir: 'dist/cantina-livraria',
    title: 'Cantina e Livraria da Igreja: Cardápio Mobile e PDV com Kanban | Faith Hub',
    description: 'Pedidos de lanches e livros da igreja pelo aplicativo com PIX integrado, fim das filas no intervalo e painel Kanban para organização da cozinha em tempo real.',
    canonical: 'https://faithhubs.com/cantina-livraria'
  },
  {
    path: '/visitantes',
    outDir: 'dist/visitantes',
    title: 'Recepção e Acolhimento de Visitantes na Igreja ("Sou Novo Aqui") | Faith Hub',
    description: 'Recepção acolhedora e sem constrangimento para visitantes no aplicativo da igreja: preenchimento em 40 segundos, pedido de oração e pastoreio imediato.',
    canonical: 'https://faithhubs.com/visitantes'
  },
  {
    path: '/mural-oracao',
    outDir: 'dist/mural-oracao',
    title: 'Mural Comunitário de Oração e Intercessão Pastoral | Faith Hub',
    description: 'Mural de oração interativo para a congregação: compartilhe motivos de oração, receba apoio com o botão "Estou Orando por Você" e envie pedidos sigilosos.',
    canonical: 'https://faithhubs.com/mural-oracao'
  },
  {
    path: '/carteirinha-digital',
    outDir: 'dist/carteirinha-digital',
    title: 'Carteirinha Digital de Membro com Foto e Validação QR | Faith Hub',
    description: 'Credencial eclesiástica oficial gravada no celular do membro: foto oficial, histórico de batismo, congregação de vínculo e validação instantânea.',
    canonical: 'https://faithhubs.com/carteirinha-digital'
  },
  {
    path: '/cultos-ao-vivo',
    outDir: 'dist/cultos-ao-vivo',
    title: 'Cultos ao Vivo e Transmissões Online Sem Distrações | Faith Hub',
    description: 'Transmita os cultos da sua igreja diretamente no aplicativo dos membros com banner pulsante "AO VIVO", player protegido e sem anúncios externos.',
    canonical: 'https://faithhubs.com/cultos-ao-vivo'
  },
  {
    path: '/devocionais',
    outDir: 'dist/devocionais',
    title: 'Devocionais Diários e Estudos Bíblicos no App da Igreja | Faith Hub',
    description: 'Nutrição espiritual diária para toda a comunidade: meditações assinadas pelos pastores com versículo bíblico do dia, reflexão e oração guiada.',
    canonical: 'https://faithhubs.com/devocionais'
  }
];

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

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(pathToFileURL(ssrEntryPath).href);

  for (const route of routes) {
    const appHtml = render(route.path);

    let html = rawTemplate
      // Substituir #root
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      // Substituir Title
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      // Substituir Meta Description
      .replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${route.description}" />`
      )
      // Substituir Canonical
      .replace(
        /<link rel="canonical" href=".*?" \/>/,
        `<link rel="canonical" href="${route.canonical}" />`
      )
      // Substituir OG Title
      .replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${route.title}" />`
      )
      // Substituir OG Description
      .replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${route.description}" />`
      )
      // Substituir OG URL
      .replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${route.canonical}" />`
      )
      // Substituir Twitter Title
      .replace(
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${route.title}" />`
      )
      // Substituir Twitter Description
      .replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${route.description}" />`
      );

    const targetDir = path.resolve(__dirname, route.outDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`✅ Pre-rendered route: ${route.path} -> ${route.outDir}/index.html`);
  }

  // Limpar diretório dist-ssr temporário
  fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error('Pre-rendering error:', err);
  process.exit(1);
});
