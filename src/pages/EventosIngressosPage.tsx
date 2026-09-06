import React, { useState } from 'react';
import {
  Ticket,
  QrCode,
  ShieldCheck,
  CalendarDays,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Zap,
  Users
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const EventosIngressosPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Eventos & Ingressos QR Code</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Ticket size={14} />
              <span>Ticketing Eclesiástico & Portaria Ágil</span>
            </div>

            <h1 className="module-title">
              Ingressos Digitais & Portaria com QR Code: <span>Conferências, Retiros e Eventos Sem Filas</span>
            </h1>

            <p className="module-description">
              Diga adeus às ticketeiras que cobram 10% a 15% de taxa e retêm o dinheiro da sua igreja por semanas. No Faith Hub, as inscrições de retiros, conferências e congressos acontecem direto no app dos membros com QR Code na carteira digital e validação em 1 segundo na portaria.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o módulo de Eventos e Ingressos QR Code do Faith Hub.')}
              >
                Conhecer o Módulo de Ingressos
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Zero taxas abusivas de terceiros</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Validação rápida na portaria com celular</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Lotes e vagas limitadas por congresso</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#ea580c' }}>
                  <QrCode size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>Portaria Expresso QR</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Validação em menos de 1 segundo</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">0%</span>
                  <span className="stat-label">Taxa por ingresso</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">1 seg</span>
                  <span className="stat-label">Check-in de entrada</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Real-time</span>
                  <span className="stat-label">Lotação do templo</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Ingresso individual intransferível anti-cópia vinculado ao perfil do membro.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES E BENEFICIOS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Gestão de Eventos</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Por que parar de usar plataformas externas de ingressos?
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <Zap size={24} />
              </div>
              <h3 className="feature-title">Receita Direta na Conta da Igreja</h3>
              <p className="feature-text">
                Sem esperar 14 ou 30 dias para receber o valor das inscrições. O pagamento via PIX cai na conta bancária da própria igreja instantaneamente.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <QrCode size={24} />
              </div>
              <h3 className="feature-title">Fim das Listas de Papel na Porta</h3>
              <p className="feature-text">
                Chega de voluntários procurando nomes em pranchetas no escuro da entrada do congresso. A equipe aponta a câmera do celular para o QR Code do app e o acesso é liberado.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Users size={24} />
              </div>
              <h3 className="feature-title">Dados que Ficam com a Igreja</h3>
              <p className="feature-text">
                Nas ticketeiras de terceiros, os contatos dos participantes ficam com a plataforma. No Faith Hub, cada inscrito vira automaticamente um contato qualificado no seu banco de dados pastoral.
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
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre Ingressos e Eventos</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'É possível criar eventos gratuitos e pagos?',
                a: 'Sim! Você pode criar tanto eventos com entrada franca (para controle de capacidade máxima) quanto eventos pagos com múltiplos lotes (ex: Lote Promocional, Lote 1, Lote 2).'
              },
              {
                q: 'O voluntário da portaria precisa de algum equipamento especial?',
                a: 'Não. Qualquer smartphone dos voluntários com o Faith Hub Studio Web aberto na tela de portaria pode escanear os ingressos com a câmera nativa.'
              },
              {
                q: 'O que acontece se uma pessoa tentar usar o mesmo QR Code duas vezes?',
                a: 'O sistema acusa imediatamente na tela da portaria: "Ingresso já utilizado às HH:MM:SS", impedindo duplicações ou fraudes de entrada.'
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
          <span className="badge-pill badge-free" style={{ margin: '0 auto 16px' }}>Próxima Conferência</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Transforme a experiência de eventos e congressos na sua igreja
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Agende uma demonstração prática do módulo de eventos e veja como lançar as inscrições do seu próximo congresso.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero conhecer o módulo de Ingressos e Portaria QR Code do Faith Hub.')}
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
