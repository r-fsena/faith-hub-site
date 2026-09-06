import React, { useState } from 'react';
import {
  BookOpen,
  WifiOff,
  Sparkles,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Smartphone,
  ChevronRight,
  Search,
  Share2
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const BibliaOfflinePage: React.FC<Props> = ({ openWhatsAppLead }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="module-page">
      {/* HEADER BREADCRUMB */}
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '20px' }}>
        <nav className="breadcrumb-nav">
          <a href="/" className="breadcrumb-link">Início</a>
          <ChevronRight size={14} />
          <a href="/#ecossistema" className="breadcrumb-link">Módulos</a>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Bíblia Sagrada 100% Offline</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-free" style={{ marginBottom: '16px' }}>
              <BookOpen size={14} />
              <span>Palavra de Deus • Acesso 100% Livre</span>
            </div>

            <h1 className="module-title">
              Bíblia Sagrada 100% Offline: <span>No Aplicativo da sua Igreja Sem Depender de Sinal</span>
            </h1>

            <p className="module-description">
              Nunca mais veja seus membros sem conseguir abrir o texto bíblico durante a pregação porque o 4G oscilou dentro do templo. O Faith Hub embute os 66 livros bíblicos e 1.189 capítulos com carregamento instantâneo e funcionamento totalmente offline.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Gostaria de testar o app com a Bíblia 100% offline do Faith Hub.')}
              >
                Solicitar Demonstração do App
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>66 livros e 1.189 capítulos</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Versões NVI, ACF e AA</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Zero consumo de dados móveis</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                  <BookOpen size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>Leitor Bíblico Imersivo</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Navegação fluida e sem travar</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">1.189</span>
                  <span className="stat-label">Capítulos em cache</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">0s</span>
                  <span className="stat-label">Tempo de espera</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Traduções oficiais</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <WifiOff size={18} color="#5EC2B8" />
                <span>Funciona no subsolo, em retiros no campo ou no meio do santuário lotado.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA BÍBLIA */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Experiência de Leitura</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Feita para a comunhão e o estudo da congregação
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(94, 194, 184, 0.15)', color: '#5EC2B8' }}>
                <WifiOff size={24} />
              </div>
              <h3 className="feature-title">Cache Local Inteligente</h3>
              <p className="feature-text">
                Na primeira abertura do app da sua igreja, todos os livros são salvos no cache do dispositivo. O membro pode colocar o celular no modo avião e ler normalmente.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15' }}>
                <Bookmark size={24} />
              </div>
              <h3 className="feature-title">Marcação e Cores nos Versículos</h3>
              <p className="feature-text">
                Destaque com cores, anotações de sermões e salvamento de passagens favoritas para consultar durante a semana ou nos encontros de célula.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Search size={24} />
              </div>
              <h3 className="feature-title">Busca Ultrarrápida por Palavra</h3>
              <p className="feature-text">
                Localize qualquer termo ou passagem bíblica em menos de 100 milissegundos, com indexação interna sem requisições lentas de servidor.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <Share2 size={24} />
              </div>
              <h3 className="feature-title">Compartilhamento de Versículos</h3>
              <p className="feature-text">
                O membro gera cards bonitos do versículo com a identidade e logo da sua igreja para compartilhar nos Stories do Instagram ou grupos de WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Dúvidas Frequentes</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre a Bíblia Offline</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'A Bíblia precisa de login para ser acessada no aplicativo?',
                a: 'Não! Alinhado à nossa diretriz de acolhimento, a Bíblia Sagrada é de acesso 100% livre e sem cadastro. Qualquer visitante que abrir o app da igreja pode começar a ler imediatamente.'
              },
              {
                q: 'Quais traduções estão disponíveis?',
                a: 'O Faith Hub inclui as principais versões em língua portuguesa: Nova Versão Internacional (NVI), Almeida Corrigida Fiel (ACF) e Almeida Revista e Atualizada (AA).'
              },
              {
                q: 'O aplicativo ocupa muito espaço na memória do celular?',
                a: 'Não. Por ser um PWA otimizado com compressão de alta densidade, toda a estrutura da Bíblia ocupa apenas cerca de 8 a 12 MB de cache, sendo infinitamente mais leve do que aplicativos tradicionais da App Store.'
              }
            ].map((item, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'open' : ''}`} style={{ marginBottom: '12px' }}>
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{item.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="demo-section" style={{ background: 'linear-gradient(180deg, #091a18 0%, #061111 100%)' }}>
        <div className="container demo-content" style={{ textAlign: 'center' }}>
          <span className="badge-pill badge-free" style={{ margin: '0 auto 16px' }}>Nutrição Espiritual</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            A Palavra de Deus sempre à mão de toda a sua comunidade
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Coloque a Bíblia Sagrada offline no bolso dos seus membros dentro do aplicativo exclusivo da sua igreja.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero ver uma demonstração do app com Bíblia offline para minha igreja.')}
            >
              Falar com um Especialista no WhatsApp
              <MessageCircle size={18} />
            </button>
            <a href="/" className="btn btn-outline">
              Voltar para a Página Inicial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
