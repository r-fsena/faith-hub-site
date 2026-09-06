import React, { useState } from 'react';
import {
  Flame,
  HeartHandshake,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Users,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const VisitantesPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Recepção de Visitantes</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-free" style={{ marginBottom: '16px' }}>
              <Flame size={14} />
              <span>Acolhimento Sem Constrangimento • Acesso Livre</span>
            </div>

            <h1 className="module-title">
              Recepção & Acolhimento de Visitantes: <span>Do "Sou Novo Aqui" ao Pastoreio Intencional</span>
            </h1>

            <p className="module-description">
              Nunca mais perca o contato de quem visitou a igreja pela primeira vez. Sem fichas de papel constrangedoras ou filas: o visitante abre o app sem precisar de login, preenche seus dados com carinho, envia seu pedido de oração e a liderança pastoral acolhe imediatamente.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o módulo de Recepção de Visitantes do Faith Hub.')}
              >
                Conhecer a Recepção de Visitantes
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Zero login ou senha exigidos</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Encaminhamento para a célula do bairro</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Contato pastoral em até 24h</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <HeartHandshake size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>Acolhimento Expresso</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Formulário acolhedor de 40 segundos</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">+85%</span>
                  <span className="stat-label">Retorno de dados</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">40 seg</span>
                  <span className="stat-label">Preenchimento</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Real-time</span>
                  <span className="stat-label">Aviso aos pastores</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>LGPD nativa: consentimento explícito para acolhimento pastoral seguro.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Pastoreio com Propósito</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Por que visitantes nunca mais voltam em muitas congregações?
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <Users size={24} />
              </div>
              <h3 className="feature-title">Fichas com Letra Ilegível</h3>
              <p className="feature-text">
                Fichas preenchidas no escuro do culto com caneta falhando resultam em números de WhatsApp errados e pessoas que nunca recebem uma mensagem de boas-vindas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">Falta de Acompanhamento no Pós-Culto</h3>
              <p className="feature-text">
                Sem um fluxo organizado, o visitante vem no domingo e na segunda-feira ninguém sabe quem ele foi ou onde mora para conectá-lo a uma célula de apoio.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <Sparkles size={24} />
              </div>
              <h3 className="feature-title">Acolhimento Confortável e Moderno</h3>
              <p className="feature-text">
                Pessoas tímidas não gostam de levantar a mão no culto. Pelo app do Faith Hub, elas se sentem acolhidas e à vontade para compartilhar pedidos de oração discretamente.
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
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre Visitantes</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Como o visitante chega até o formulário no domingo?',
                a: 'Basta colocar um QR Code nos telões ou no banco: "Sou novo aqui • Aponte sua câmera". O visitante cai direto na tela de recepção sem precisar baixar nada.'
              },
              {
                q: 'Quem recebe o aviso quando um visitante preenche o formulário?',
                a: 'O pastor responsável pela congregação e os líderes do ministério de acolhimento recebem notificação imediata no Faith Hub Studio.'
              },
              {
                q: 'É possível encaminhar o visitante direto para o líder de célula do bairro dele?',
                a: 'Sim! Com 1 clique no Studio, o acolhimento pode transferir o contato do visitante para o líder da célula mais próxima para uma visita de comunhão.'
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
          <span className="badge-pill badge-admin" style={{ margin: '0 auto 16px' }}>Vidas Conectadas</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Transforme visitantes ocasionais em membros frutíferos
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Conheça o fluxo de recepção de visitantes do Faith Hub e potencialize o acolhimento no próximo culto.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero ver uma demonstração do fluxo de recepção de visitantes do Faith Hub.')}
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
