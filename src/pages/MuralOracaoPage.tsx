import React, { useState } from 'react';
import {
  MessageSquare,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Users,
  Sparkles,
  Lock
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const MuralOracaoPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Mural Comunitário de Oração</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Heart size={14} />
              <span>Intercessão Viva • Comunhão em Tempo Real</span>
            </div>

            <h1 className="module-title">
              Mural Comunitário de Oração: <span>Intercessão Contínua e Cuidado Entre os Irmãos</span>
            </h1>

            <p className="module-description">
              Leve o altar de oração da sua igreja para o dia a dia da comunidade. No app do Faith Hub, os membros compartilham motivos de oração, recebem apoio instantâneo dos irmãos com o botão "Estou Orando por Você" e a liderança pastoral acompanha situações sensíveis com moderação e privacidade.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o Mural de Oração do Faith Hub para minha congregação.')}
              >
                Conhecer o Mural de Oração
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Interação "Estou Orando por Você"</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Moderação pastoral prévia</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Opção de pedido sigiloso aos pastores</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}>
                  <MessageSquare size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>Altar de Intercessão</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Comunhão ativa durante a semana</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Oração contínua</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Apoio fraternal</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Sigilo</span>
                  <span className="stat-label">Pedidos pastorais</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Controle estrito contra mensagens indevidas ou correntes não edificantes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Cuidado Pastoral</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Por que a oração comunitária fortalece o engajamento na congregação?
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <Users size={24} />
              </div>
              <h3 className="feature-title">Fim do Isolamento nos Momentos Difíceis</h3>
              <p className="feature-text">
                Muitos membros passam por lutos, cirurgias e crises financeiras em silêncio. No mural, eles sentem o abraço da igreja vendo dezenas de irmãos orando por sua causa.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Lock size={24} />
              </div>
              <h3 className="feature-title">Pedidos Sigilosos com a Equipe Pastoral</h3>
              <p className="feature-text">
                Nem todo motivo de oração deve ser público. O membro pode marcar a opção "Apenas Pastores", garantindo sigilo absoluto para aconselhamento de situações íntimas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <Sparkles size={24} />
              </div>
              <h3 className="feature-title">Testemunhos e Respostas de Oração</h3>
              <p className="feature-text">
                Quando a oração é respondida, o membro pode atualizar o pedido como "Vitória Alcançada", inspirando a fé e edificando toda a congregação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Dúvidas</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre o Mural de Oração</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Como funciona a moderação para evitar comentários ou pedidos inconvenientes?',
                a: 'O Faith Hub permite ativar a moderação prévia no Studio. Nesse modo, novos pedidos só ficam visíveis para a igreja após a aprovação de um líder ou pastor autorizado.'
              },
              {
                q: 'O membro recebe notificação quando alguém ora por ele?',
                a: 'Sim! O autor do pedido recebe um aviso carinhoso no app: "Um irmão acabou de orar pelo seu pedido", renovando sua esperança ao longo da semana.'
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
          <span className="badge-pill badge-member" style={{ margin: '0 auto 16px' }}>Comunhão Real</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Aproxime seus membros em oração todos os dias
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Conheça o Mural de Oração do Faith Hub e fortaleça a intercessão da sua comunidade local.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Gostaria de ver uma demonstração do Mural de Oração do Faith Hub.')}
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
