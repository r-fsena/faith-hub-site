import React, { useState } from 'react';
import {
  Video,
  Tv,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Radio,
  Zap,
  Smartphone
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const CultosAoVivoPage: React.FC<Props> = ({ openWhatsAppLead }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="module-page">
      <div className="container" style={{ paddingTop: '110px', paddingBottom: '16px' }}>
        <nav className="breadcrumb-nav">
          <a href="/" className="breadcrumb-link">Início</a>
          <ChevronRight size={14} />
          <a href="/#ecossistema" className="breadcrumb-link">Módulos</a>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Cultos ao Vivo & Transmissões</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Radio size={14} />
              <span>Transmissão Oficial • YouTube Integrado</span>
            </div>

            <h1 className="module-title">
              Cultos ao Vivo & Transmissões: <span>Seu Altar Conectado Sem Distrações de Redes Sociais</span>
            </h1>

            <p className="module-description">
              Quando o membro tenta assistir ao culto direto no YouTube ou Instagram, os algoritmos bombardeiam a tela com notificações, propagandas e vídeos sugeridos que dispersam a atenção espiritual. No Faith Hub, o culto é transmitido em um ambiente 100% focado e consagrado à adoração.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer a integração de Cultos ao Vivo do Faith Hub.')}
              >
                Conhecer a Transmissão de Cultos
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Banner pulsante "AO VIVO" no app</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Zero anúncios invasivos no player</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Bíblia e anotações na mesma tela</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                  <Video size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>Culto Online Santificado</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Acesso com 1 toque no app</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">1 Toque</span>
                  <span className="stat-label">Para assistir</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">HD</span>
                  <span className="stat-label">Alta resolução</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Zero</span>
                  <span className="stat-label">Distrações externas</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Player protegido com link oficial do canal da sua igreja.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Adoração Sem Barreiras</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Por que transmitir pelo app da igreja faz a diferença?
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <Tv size={24} />
              </div>
              <h3 className="feature-title">Foco Total na Mensagem</h3>
              <p className="feature-text">
                Sem comentários ofensivos da internet aberta ou vídeos de terceiros na lateral. O membro vivencia o culto em comunhão e respeito ao momento sagrado.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Zap size={24} />
              </div>
              <h3 className="feature-title">Notificação Instantânea de Início</h3>
              <p className="feature-text">
                Assim que a equipe de mídia sobe o sinal da celebração, um banner pulsante se acende no app avisando que o culto está no ar.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <Smartphone size={24} />
              </div>
              <h3 className="feature-title">Apoio a Enfermos e Viajantes</h3>
              <p className="feature-text">
                Irmãos acamados, em tratamento hospitalar ou viajando a trabalho continuam conectados ao púlpito da sua igreja com facilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Dúvidas</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre os Cultos ao Vivo</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Como a equipe de mídia configura o link da transmissão?',
                a: 'Basta colar o link da live do YouTube no Faith Hub Studio antes do culto. Em menos de 5 segundos, o app atualiza o player de todos os membros automaticamente.'
              },
              {
                q: 'Fica gravado para assistir depois?',
                a: 'Sim! Os cultos anteriores ficam catalogados em uma biblioteca organizada para que a igreja possa rever mensagens e séries temáticas.'
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
          <span className="badge-pill badge-free" style={{ margin: '0 auto 16px' }}>Comunicação em Tempo Real</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Alcance vidas onde quer que elas estejam
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Transmita as celebrações da sua congregação com dignidade e foco através do Faith Hub.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero ver uma demonstração do módulo de Cultos ao Vivo do Faith Hub.')}
            >
              Falar com um Consultor no WhatsApp
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
