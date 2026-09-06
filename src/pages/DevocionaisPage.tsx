import React, { useState } from 'react';
import {
  Sun,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const DevocionaisPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Devocionais Diários</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Sun size={14} />
              <span>Nutrição Espiritual • Palavra Diária</span>
            </div>

            <h1 className="module-title">
              Devocionais Diários & Estudos: <span>O Pastor Alimentando a Igreja Todos os Dias</span>
            </h1>

            <p className="module-description">
              O pastoreio não acontece apenas no domingo. Através do Faith Hub, os pastores e líderes publicam meditações diárias com versículo bíblico, reflexão prática e oração guiada, entregues diretamente na tela do membro todas as manhãs com notificação carinhosa.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o módulo de Devocionais Diários do Faith Hub.')}
              >
                Conhecer os Devocionais Diários
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Meditação com versículo do dia</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Oração guiada de encerramento</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Notificação matinal inspiradora</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}>
                  <Sun size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>Pão Diário do Rebanho</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Leitura em menos de 3 minutos</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">365</span>
                  <span className="stat-label">Dias no ano</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">3 min</span>
                  <span className="stat-label">Tempo de leitura</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Autoral da igreja</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Identidade própria: textos assinados pelos pastores titulares da sua igreja.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Crescimento Cristão</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Por que nutrir o rebanho diariamente é fundamental?
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <BookOpen size={24} />
              </div>
              <h3 className="feature-title">Foco Espiritual Logo Pela Manhã</h3>
              <p className="feature-text">
                Antes de ser consumido pelas notícias e estresses do trabalho, o membro inicia seu dia ouvindo a voz do seu pastor através das Escrituras.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <Share2 size={24} />
              </div>
              <h3 className="feature-title">Evangelismo em 1 Toque</h3>
              <p className="feature-text">
                O membro pode compartilhar o devocional em seus Stories ou no WhatsApp de amigos que estão passando por momentos de dor ou desânimo.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Bookmark size={24} />
              </div>
              <h3 className="feature-title">Histórico e Séries Temáticas</h3>
              <p className="feature-text">
                Crie séries de 21 dias de oração, campanhas bíblicas, jejuns ou estudos sobre a família, mantendo a igreja alinhada na mesma visão profética.
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
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre os Devocionais</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'O pastor precisa escrever todos os dias ou pode agendar?',
                a: 'Pode agendar com semanas de antecedência! No Faith Hub Studio, a equipe pastoral programa as publicações para o mês inteiro com data e hora pré-definidas.'
              },
              {
                q: 'É possível incluir áudio do pastor lendo a reflexão?',
                a: 'Sim! O sistema suporta anexar áudios curtos ou podcasts para membros que preferem ouvir o devocional no trânsito ou durante caminhadas.'
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
          <span className="badge-pill badge-member" style={{ margin: '0 auto 16px' }}>Pastoreio Diário</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Alimente a vida espiritual da sua comunidade todos os dias
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Conheça a ferramenta de devocionais diários do Faith Hub e potencialize o ministério pastoral.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero ver uma demonstração do módulo de Devocionais do Faith Hub.')}
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
