import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  BookOpen, 
  Smartphone, 
  Ticket, 
  LayoutDashboard, 
  Store, 
  Heart, 
  CalendarDays, 
  MessageSquare, 
  Video, 
  Sun, 
  UserPlus, 
  Tv, 
  ShieldCheck, 
  QrCode, 
  Layers, 
  Globe2, 
  Flame, 
  Share2, 
  CreditCard,
  MessageCircle,
  HelpCircle,
  Building2,
  Baby,
  FileText,
  BarChart3,
  Users
} from 'lucide-react';
import './App.css';

import mockupImg from './assets/app-mockup.png';

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'pwa' | 'studio'>('pwa');
  
  // Lead Form
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadChurch, setLeadChurch] = useState('');
  const [leadMembers, setLeadMembers] = useState('100-500');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Tenho interesse no Ecossistema Faith-Hub para a minha igreja.\n\n*Nome:* ${leadName}\n*Igreja:* ${leadChurch}\n*WhatsApp:* ${leadPhone}\n*Porte:* ${leadMembers} membros`;
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="dot-pattern-bg min-h-screen">
      
      {/* NAVBAR */}
      <nav className={`navbar container ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 900,
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(15, 118, 110, 0.3)'
          }}>
            FH
          </div>
          Faith-Hub
        </div>
        
        <div className="nav-links">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#pilares" className="nav-link">Diferenciais</a>
          <a href="#ecossistema" className="nav-link">Funcionalidades</a>
          <a href="#comparativo" className="nav-link">Comparativo</a>
          <a href="#faq" className="nav-link">Dúvidas</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a 
            href="https://studio.faithhub.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline" 
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
          >
            Acessar Studio
          </a>
          <button 
            className="btn btn-primary" 
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} 
            onClick={() => document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar Demonstração
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="inicio">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-fade-in-up">
              <Zap size={15} fill="currentColor" />
              <span>Tudo em um único lugar • Web & App Integrados</span>
            </div>
            
            <h1 className="hero-title animate-fade-in-up">
              A plataforma unificada para <span>liderar, pastorear</span> e engajar sua comunidade.
            </h1>
            
            <p className="hero-description animate-fade-in-up">
              Conecte os membros na palma da mão com Bíblia 100% offline, cultos ao vivo, células e cantina mobile, enquanto os pastores gerenciam congregações, voluntários e finanças em tempo real.
            </p>
            
            <div className="hero-actions animate-fade-in-up">
              <button 
                className="btn btn-primary" 
                onClick={() => document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Demonstração VIP
                <ArrowRight size={18} />
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => document.getElementById('ecossistema')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Todos os Módulos
              </button>
            </div>
          </div>

          <div className="hero-visual animate-fade-in-up" style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
              border: '1.5px solid var(--border-color)',
              borderRadius: '36px',
              padding: '16px',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.12)',
              maxWidth: '360px',
              margin: '0 auto'
            }}>
              <img 
                src={mockupImg} 
                alt="Faith Hub App Preview" 
                style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block' }} 
              />
            </div>

            {/* Floating Badge 1 */}
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '-20px',
              background: '#ffffff',
              padding: '12px 18px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.4rem' }}>📖</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.84rem', color: '#0f172a' }}>Bíblia 100% Offline</div>
                <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>66 Livros na Íntegra</div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div style={{
              position: 'absolute',
              bottom: '10%',
              right: '-15px',
              background: '#ffffff',
              padding: '12px 18px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.4rem' }}>🌐</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.84rem', color: '#0f172a' }}>Multi-Congregações</div>
                <div style={{ fontSize: '0.72rem', color: '#0f766e', fontWeight: 700 }}>Sede & Filiais Conectadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILARES DO ECOSSISTEMA */}
      <section className="section" id="pilares" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-title">Por que as igrejas escolhem o Faith-Hub?</h2>
            <p className="section-subtitle">
              Criamos uma arquitetura moderna que resolve tanto a experiência do membro quanto a complexidade da liderança.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Pilar 1 */}
            <div className="feature-card" style={{ padding: '32px 24px' }}>
              <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                <Smartphone size={26} />
              </div>
              <h3 className="feature-title">1. App do Membro sem Fricção (PWA)</h3>
              <p className="feature-text">
                Sem necessidade de baixar via App Store ou Play Store. O membro instala com 1 clique direto pelo navegador, não ocupa memória e tem acesso imediato à Bíblia, cultos e célula.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="feature-card" style={{ padding: '32px 24px' }}>
              <div className="feature-icon-wrapper" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                <Globe2 size={26} />
              </div>
              <h3 className="feature-title">2. Governança Multi-Campi & Redes</h3>
              <p className="feature-text">
                Gerencie congregações matriz e filiais em um único painel. Pastores podem ter visões isoladas de suas unidades ou uma visão consolidada de toda a denominação.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="feature-card" style={{ padding: '32px 24px' }}>
              <div className="feature-icon-wrapper" style={{ background: 'rgba(147, 51, 234, 0.1)', color: '#9333ea' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 className="feature-title">3. Gestão Pastoral, Células & Finanças</h3>
              <p className="feature-text">
                Controle aprovações de filiação em pequenos grupos, escala de partilhas/lanches, venda de ingressos com QR Code e monitor de pedidos da cantina em tempo real.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO INTERATIVA: TODAS AS FUNCIONALIDADES DETALHADAS */}
      <section className="section" id="ecossistema">
        <div className="container" style={{ textAlign: 'center' }}>
          
          <h2 className="section-title">O Ecossistema Completo em Detalhes</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Alterne entre a experiência do membro no smartphone e a central de gestão pastoral.
          </p>

          {/* Abas Interativas */}
          <div className="eco-tabs-wrapper">
            <button
              type="button"
              className={`eco-tab-btn ${activeTab === 'pwa' ? 'active' : ''}`}
              onClick={() => setActiveTab('pwa')}
            >
              <Smartphone size={18} />
              App do Membro (PWA Mobile)
            </button>

            <button
              type="button"
              className={`eco-tab-btn ${activeTab === 'pwa' ? '' : 'active'}`}
              onClick={() => setActiveTab('studio')}
            >
              <LayoutDashboard size={18} />
              Faith-Hub Studio (Portal Web Gestão)
            </button>
          </div>

          {/* Informative Security & Access Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 22px',
            background: 'rgba(15, 118, 110, 0.07)',
            borderRadius: 999,
            border: '1px solid rgba(15, 118, 110, 0.18)',
            marginBottom: '2.5rem',
            fontSize: '0.86rem',
            color: '#0f766e',
            fontWeight: 700,
            maxWidth: '780px',
            lineHeight: 1.45,
            textAlign: 'left'
          }}>
            <span style={{ fontSize: '1.2rem' }}>💡</span>
            <span>
              <strong>Acesso Inteligente & Seguro:</strong> Apenas a <strong>Bíblia Sagrada</strong>, a <strong>Recepção de Visitantes</strong> e o <strong>Módulo Kids</strong> estão disponíveis livremente sem login. Todas as demais funções são exclusivas e protegidas na <strong>Área do Membro</strong>.
            </span>
          </div>

          {/* =======================================================
              ABA 1: APP DO MEMBRO (PWA)
              ======================================================= */}
          {activeTab === 'pwa' && (
            <div className="features-grid animate-fade-in-up">
              
              {/* 1. Bíblia Sagrada */}
              <div className="feature-card">
                <span className="badge-pill badge-free">🟢 Acesso Livre (Sem Login)</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                  <BookOpen size={24} />
                </div>
                <h3 className="feature-title">Bíblia Sagrada 100% Offline</h3>
                <p className="feature-text">
                  66 livros completos (Antigo e Novo Testamento), 1.189 capítulos nas versões NVI, ACF e AA. Marca-texto com 4 cores, ajuste de fonte, 3 modos de leitura e funcionamento 100% offline.
                </p>
              </div>

              {/* 2. Recepção de Visitantes */}
              <div className="feature-card">
                <span className="badge-pill badge-free">🟢 Acesso Livre (Sem Login)</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <Flame size={24} />
                </div>
                <h3 className="feature-title">Recepção de Visitantes ("Sou Novo Aqui")</h3>
                <p className="feature-text">
                  Formulário acolhedor onde visitantes informam sua congregação de preferência, motivo da visita e pedido de oração para acolhimento imediato da liderança.
                </p>
              </div>

              {/* 3. Módulo Kids & Check-in Expresso */}
              <div className="feature-card">
                <span className="badge-pill badge-free">🟢 Acesso Livre (Sem Login)</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  <Baby size={24} />
                </div>
                <h3 className="feature-title">Ministério Kids & Check-in de Crianças</h3>
                <p className="feature-text">
                  Totem e registro ágil de entrada de crianças para membros e visitantes, geração de PIN de segurança, crachás digitais e sistema de alerta aos responsáveis.
                </p>
              </div>

              {/* 4. Cultos ao Vivo */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                  <Video size={24} />
                </div>
                <h3 className="feature-title">Cultos ao Vivo & Transmissões</h3>
                <p className="feature-text">
                  Acesso exclusivo com 1 toque às transmissões do canal da igreja no YouTube com banner pulsante "AO VIVO" durante as celebrações oficiais.
                </p>
              </div>

              {/* 5. Palavra Diária & Devocionais */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                  <Sun size={24} />
                </div>
                <h3 className="feature-title">Devocionais Diários & Estudos</h3>
                <p className="feature-text">
                  Meditações diárias publicadas pelos pastores com versículo do dia, reflexão bíblica e oração guiada para nutrir a vida espiritual da comunidade.
                </p>
              </div>

              {/* 6. Células & Redes */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                  <Layers size={24} />
                </div>
                <h3 className="feature-title">Células, Redes & Escala</h3>
                <p className="feature-text">
                  Encontre o grupo ideal por bairro/horário, solicite ingresso na célula, veja o endereço do anfitrião e acompanhe a escala de voluntários do lanche semanal.
                </p>
              </div>

              {/* 7. Cantina & PDV Mobile */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(5, 150, 105, 0.1)', color: '#059669' }}>
                  <Store size={24} />
                </div>
                <h3 className="feature-title">Cantina & Loja da Igreja</h3>
                <p className="feature-text">
                  Cardápio da cantina e livros com carrinho de compras, opção de retirada no balcão ou entrega e pagamento seguro via PIX ou Cartão de Crédito.
                </p>
              </div>

              {/* 8. Eventos & Ingressos QR Code */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c' }}>
                  <Ticket size={24} />
                </div>
                <h3 className="feature-title">Eventos & Ingressos QR Code</h3>
                <p className="feature-text">
                  Inscrições em conferências e cursos com carteira digital de ingressos. O membro apresenta o QR Code na portaria para check-in instantâneo.
                </p>
              </div>

              {/* 9. Dízimos & Ofertas */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(147, 51, 234, 0.1)', color: '#9333ea' }}>
                  <Heart size={24} />
                </div>
                <h3 className="feature-title">Dízimos & Ofertas por Unidade</h3>
                <p className="feature-text">
                  Contribuição financeira segura com geração de chaves PIX dinâmicas por congregação/filial e botão de cópia com 1 clique.
                </p>
              </div>

              {/* 10. Mural de Oração */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                  <MessageSquare size={24} />
                </div>
                <h3 className="feature-title">Mural Comunitário de Oração</h3>
                <p className="feature-text">
                  Espaço onde membros compartilham pedidos de oração e os irmãos interagem clicando em "Estou Orando por Você", gerando apoio mútuo.
                </p>
              </div>

              {/* 11. Perfil & Carteirinha */}
              <div className="feature-card">
                <span className="badge-pill badge-member">🔒 Área do Membro</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                  <Smartphone size={24} />
                </div>
                <h3 className="feature-title">Perfil & Carteirinha Digital</h3>
                <p className="feature-text">
                  Identificação oficial de membro com foto nativa, histórico de batismo, congregação de vínculo e dados de contato atualizados.
                </p>
              </div>

            </div>
          )}

          {/* =======================================================
              ABA 2: FAITH-HUB STUDIO (PORTAL WEB)
              ======================================================= */}
          {activeTab === 'studio' && (
            <div className="features-grid animate-fade-in-up">
              
              {/* 1. Ministério Kids & Totens */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Totem & Segurança Kids</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  <Baby size={24} />
                </div>
                <h3 className="feature-title">Ministério Kids & Totem de Check-in</h3>
                <p className="feature-text">
                  Totem ágil de entrada de crianças (membros e visitantes), geração de PIN diário de 4 dígitos, crachás digitais, checkout seguro por QR Code e alertas em tempo real aos pais via App e WhatsApp.
                </p>
              </div>

              {/* 2. Relatórios & Auditoria */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Auditoria & Inteligência</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <BarChart3 size={24} />
                </div>
                <h3 className="feature-title">Relatórios & Auditoria de Check-ins</h3>
                <p className="feature-text">
                  Histórico completo de presenças, devoluções, PINs e chamados aos pais. Painel de KPIs ao vivo com exportação em 1 clique para Excel (.csv com BOM) e Impressão formatada em PDF.
                </p>
              </div>

              {/* 3. Multi-Congregações */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Multi-Campus Blindado</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                  <Building2 size={24} />
                </div>
                <h3 className="feature-title">Gestão Multi-Congregações (Campi)</h3>
                <p className="feature-text">
                  Cadastre todas as filiais e congregações da rede. Segregação de acesso automática por liderança autorizada e visão global consolidada para pastores seniores.
                </p>
              </div>

              {/* 4. Membros & Famílias */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Pastoreio & Famílias</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                  <Users size={24} />
                </div>
                <h3 className="feature-title">Membros & Agrupamento Familiar</h3>
                <p className="feature-text">
                  Controle de membros, liderança e pastores. Agrupamento familiar automático de crianças com seus responsáveis na base de dados para conferência e segurança.
                </p>
              </div>

              {/* 5. Cell Workspace Studio */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Pequenos Grupos</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(147, 51, 234, 0.1)', color: '#9333ea' }}>
                  <Layers size={24} />
                </div>
                <h3 className="feature-title">Cell Workspace Studio</h3>
                <p className="feature-text">
                  Painel de 4 abas por célula: gerenciamento de participantes, aprovação de solicitações de ingresso do app, escala de lanches e dados do encontro.
                </p>
              </div>

              {/* 6. Kanban de Pedidos PDV */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Cantina & Livraria</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(5, 150, 105, 0.1)', color: '#059669' }}>
                  <Store size={24} />
                </div>
                <h3 className="feature-title">Cantina & Kanban de Pedidos</h3>
                <p className="feature-text">
                  Cadastro de produtos e monitor de pedidos em tempo real estilo Trello para a cozinha/cantina: Novo ➔ Em Preparo ➔ Pronto ➔ Entregue, com split financeiro.
                </p>
              </div>

              {/* 7. Scanner de Ingressos */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Ticketing & Portaria</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c' }}>
                  <QrCode size={24} />
                </div>
                <h3 className="feature-title">Scanner QR Code de Portaria</h3>
                <p className="feature-text">
                  Criação de eventos, lotes de ingressos e leitor de QR Code integrado no portal para validação instantânea na entrada dos cultos e congressos.
                </p>
              </div>

              {/* 8. Central de Transmissões */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Mídia & Transmissões</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                  <Tv size={24} />
                </div>
                <h3 className="feature-title">Central de Cultos ao Vivo</h3>
                <p className="feature-text">
                  Agendamento e acionamento de links de transmissão do YouTube, ativando alertas instantâneos no smartphone de todos os membros.
                </p>
              </div>

              {/* 9. Devocionais & Estudos */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Nutrição Espiritual</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                  <Sun size={24} />
                </div>
                <h3 className="feature-title">Studio de Devocionais & Estudos</h3>
                <p className="feature-text">
                  Editor rico de mensagens e estudos bíblicos com agendamento de publicação para nutrir os membros todos os dias com a Palavra pastoral.
                </p>
              </div>

              {/* 10. Moderação Pastoral */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Acolhimento Pastoral</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                  <MessageCircle size={24} />
                </div>
                <h3 className="feature-title">Mural Pastoral de Orações</h3>
                <p className="feature-text">
                  Acompanhamento confidencial dos motivos de oração do rebanho, com atalho direto de WhatsApp para aconselhamento pastoral imediato.
                </p>
              </div>

              {/* 11. Branding White-Label */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Identidade Própria</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                  <Globe2 size={24} />
                </div>
                <h3 className="feature-title">Identidade White-Label & PWA Studio</h3>
                <p className="feature-text">
                  Defina as cores institucionais, logos, banners, dados de endereço e chaves de pagamento (Pagar.me e PIX) exclusivas da sua denominação.
                </p>
              </div>

              {/* 12. Propostas Digitais & SaaS */}
              <div className="feature-card">
                <span className="badge-pill badge-admin">⚡ Expansão & SaaS</span>
                <div className="feature-icon-wrapper" style={{ background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7' }}>
                  <FileText size={24} />
                </div>
                <h3 className="feature-title">Propostas Digitais & Provisionamento</h3>
                <p className="feature-text">
                  Gerador de propostas eletrônicas públicas com aceite digital e provisionamento automático instantâneo de instâncias na nuvem AWS.
                </p>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* TABELA COMPARATIVA: TUDO EM UM SÓ LUGAR VS FERRAMENTAS ESPALHADAS */}
      <section className="section" id="comparativo" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Chega de Ferramentas Espalhadas</h2>
            <p className="section-subtitle">
              Veja a diferença entre ter o ecossistema Faith-Hub unificado vs tentar conectar 6 ferramentas separadas.
            </p>
          </div>

          <div className="comp-table-wrapper">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Recurso / Experiência</th>
                  <th className="comp-highlight">⚡ Faith-Hub Ecossistema</th>
                  <th>❌ Ferramentas Fragmentadas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Instalação do App</strong></td>
                  <td className="comp-highlight">Instantânea via PWA (Sem taxas ou App Store)</td>
                  <td>Baixar 150MB na loja de apps, esquecem a senha</td>
                </tr>
                <tr>
                  <td><strong>Bíblia Sagrada</strong></td>
                  <td className="comp-highlight">100% Real, 66 Livros, 3 Versões & Offline</td>
                  <td>Membro precisa alternar para outro app ou não tem</td>
                </tr>
                <tr>
                  <td><strong>Ministério Kids & Totens</strong></td>
                  <td className="comp-highlight">Totem expresso, PIN 4 dígitos, crachás e chamados via App/WhatsApp</td>
                  <td>Fichas manuais de papel, risco na devolução e sem alertas</td>
                </tr>
                <tr>
                  <td><strong>Relatórios & Auditoria Kids</strong></td>
                  <td className="comp-highlight">Histórico de presenças, métricas ao vivo e exportação Excel/PDF</td>
                  <td>Sem histórico nem auditoria de operadores e saídas</td>
                </tr>
                <tr>
                  <td><strong>Gestão Multi-Campus</strong></td>
                  <td className="comp-highlight">Sede e Filiais integradas com segregação de líderes</td>
                  <td>Planilhas do Excel separadas que nunca batem</td>
                </tr>
                <tr>
                  <td><strong>Células & Lanches</strong></td>
                  <td className="comp-highlight">Workspace com aprovação e escala de comunhão</td>
                  <td>Grupos caóticos de WhatsApp onde mensagens se perdem</td>
                </tr>
                <tr>
                  <td><strong>Cantina & Cafeteria</strong></td>
                  <td className="comp-highlight">Cardápio digital, PIX e Kanban na cozinha</td>
                  <td>Fichinhas de papel, filas longas e desencontro de caixa</td>
                </tr>
                <tr>
                  <td><strong>Ingressos de Eventos</strong></td>
                  <td className="comp-highlight">Carteira digital + Scanner QR Code sem taxa extra</td>
                  <td>Taxas abusivas de 10% a 15% em ticketeiras externas</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" id="faq">
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle">
              Tire suas dúvidas sobre como o Faith-Hub transforma o dia a dia da sua comunidade.
            </p>
          </div>

          <div className="faq-grid">
            
            <div className="faq-item">
              <div className="faq-q">
                <HelpCircle size={18} color="#0f766e" />
                Como os membros instalam o aplicativo?
              </div>
              <div className="faq-a">
                O app é uma Progressive Web App (PWA) de última geração. O membro acessa o link da igreja pelo celular e clica em "Adicionar à Tela de Início". Funciona tanto em iPhones (iOS) quanto Androids sem precisar de downloads pesados.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <HelpCircle size={18} color="#0f766e" />
                Minha igreja tem várias filiais. Como funciona?
              </div>
              <div className="faq-a">
                O Faith-Hub foi desenhado desde o início para operações multi-campi. Cada filial tem seus dados, pastores e cantinas isoladas, enquanto a liderança geral da Sede acompanha tudo de forma consolidada.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <HelpCircle size={18} color="#0f766e" />
                A Bíblia Sagrada funciona sem internet?
              </div>
              <div className="faq-a">
                Sim! Todos os 66 livros bíblicos e 1.189 capítulos (traduções NVI, ACF e AA) ficam salvos no cache do dispositivo, permitindo leitura rápida e marcação de versículos em qualquer lugar.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <HelpCircle size={18} color="#0f766e" />
                Como a liderança gerencia os grupos e células?
              </div>
              <div className="faq-a">
                Pelo Cell Workspace Studio, os líderes e pastores aprovam novos membros que solicitaram ingresso pelo app, gerenciam contatos e organizam a escala de voluntários para a comunhão semanal.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FORMULÁRIO DE SOLICITAÇÃO DE DEMONSTRAÇÃO VIP */}
      <section className="section" id="demonstracao" style={{ background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          
          <span style={{ background: 'rgba(255, 255, 255, 0.15)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Transformação Digital para o seu Ministério
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#ffffff', marginTop: '16px', letterSpacing: '-0.03em' }}>
            Pronto para ver o Faith-Hub na prática?
          </h2>

          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.08rem', margin: '12px 0 32px 0' }}>
            Preencha seus dados abaixo e nosso especialista apresentará uma demonstração personalizada com a identidade da sua congregação.
          </p>

          <form 
            onSubmit={handleLeadSubmit}
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '32px 28px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              textAlign: 'left',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Seu Nome Completo *
              </label>
              <input
                type="text"
                value={leadName}
                onChange={e => setLeadName(e.target.value)}
                required
                placeholder="Ex: Pastor Marcos Silva"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1.5px solid var(--border-color)',
                  fontSize: '0.90rem',
                  outline: 'none',
                  color: '#0f172a'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                WhatsApp com DDD *
              </label>
              <input
                type="text"
                value={leadPhone}
                onChange={e => setLeadPhone(e.target.value)}
                required
                placeholder="(11) 99999-9999"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1.5px solid var(--border-color)',
                  fontSize: '0.90rem',
                  outline: 'none',
                  color: '#0f172a'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Nome da Igreja / Denominação *
              </label>
              <input
                type="text"
                value={leadChurch}
                onChange={e => setLeadChurch(e.target.value)}
                required
                placeholder="Ex: Comunidade da Fé"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1.5px solid var(--border-color)',
                  fontSize: '0.90rem',
                  outline: 'none',
                  color: '#0f172a'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Número Estimado de Membros
              </label>
              <select
                value={leadMembers}
                onChange={e => setLeadMembers(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1.5px solid var(--border-color)',
                  fontSize: '0.90rem',
                  outline: 'none',
                  color: '#0f172a',
                  fontWeight: 600
                }}
              >
                <option value="Até 100">Até 100 membros</option>
                <option value="100-500">100 a 500 membros</option>
                <option value="500-2000">500 a 2.000 membros</option>
                <option value="Mais de 2000">Mais de 2.000 membros (Multi-Campi)</option>
              </select>
            </div>

            <div style={{ gridColumn: 'span 2', marginTop: '12px' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '1.05rem',
                  fontWeight: 900,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Solicitar Demonstração no WhatsApp
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'var(--primary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 900
                }}>
                  FH
                </div>
                <h4 style={{ margin: 0 }}>Faith-Hub</h4>
              </div>
              <p style={{ marginTop: '12px' }}>
                O ecossistema definitivo para a igreja local. Conectando pessoas e unificando a gestão pastoral em tempo real.
              </p>
            </div>

            <div>
              <h5 style={{ color: '#ffffff', marginBottom: '14px', fontSize: '0.96rem' }}>Ecossistema</h5>
              <a href="#ecossistema">App do Membro (PWA)</a>
              <a href="#ecossistema">Faith-Hub Studio Web</a>
              <a href="#ecossistema">Bíblia Sagrada Offline</a>
              <a href="#ecossistema">Cell Workspace</a>
              <a href="#ecossistema">Cantina & PDV Mobile</a>
            </div>

            <div>
              <h5 style={{ color: '#ffffff', marginBottom: '14px', fontSize: '0.96rem' }}>Institucional</h5>
              <a href="#inicio">Início</a>
              <a href="#pilares">Diferenciais</a>
              <a href="#comparativo">Comparativo</a>
              <a href="#faq">Perguntas Frequentes</a>
              <a href="https://studio.faithhub.com.br" target="_blank" rel="noopener noreferrer">Acesso Studio</a>
            </div>

            <div>
              <h5 style={{ color: '#ffffff', marginBottom: '14px', fontSize: '0.96rem' }}>Fale Conosco</h5>
              <p style={{ margin: 0, fontSize: '0.88rem' }}>contato@faithhub.com.br</p>
              <p style={{ margin: '6px 0 0 0', fontSize: '0.88rem' }}>São Paulo, Brasil</p>
              <div style={{ marginTop: '16px' }}>
                <a 
                  href="https://api.whatsapp.com/send?phone=5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ color: '#ffffff', borderColor: '#334155', padding: '8px 16px', fontSize: '0.80rem' }}
                >
                  💬 Suporte WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Faith-Hub Ecossistema. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
