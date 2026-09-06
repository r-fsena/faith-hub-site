import React, { useState } from 'react';
import {
  Users,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Flame,
  Heart,
  ClipboardList,
  UserCheck,
  Smartphone
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const CelulasPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Células, Grupos & Escalas</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Flame size={14} />
              <span>Cell Workspace Studio • Comunhão Semanal</span>
            </div>

            <h1 className="module-title">
              Gestão de Células e Escala de Voluntários: <span>Pastoreio Próximo e Comunhão Ativa</span>
            </h1>

            <p className="module-description">
              Dê aos líderes de pequenos grupos uma ferramenta ágil na palma da mão. Relatórios de presença semanais, pedidos de oração, aprovação de novos membros e escalas de ministérios (louvor, mídia, recepção, kids) com confirmação instantânea no app.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o Módulo de Células e Escalas de Voluntários do Faith Hub.')}
              >
                Conhecer o Cell Workspace
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Relatório semanal em 30 segundos</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Escalas com confirmação no app</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Acompanhamento de visitantes</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                  <Users size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>Cell Workspace Studio</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Para líderes, pastores e redes</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">1 Toque</span>
                  <span className="stat-label">Chamada da célula</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Real-time</span>
                  <span className="stat-label">Gráficos de presença</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">WhatsApp</span>
                  <span className="stat-label">Lembrete de escala</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <Heart size={18} color="#ec4899" />
                <span>Pastoreio intencional: saiba quem faltou a 2 semanas seguidas para ligar e cuidar.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Funcionalidades Principais</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Tudo o que sua liderança precisa para multiplicar pequenos grupos
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <ClipboardList size={24} />
              </div>
              <h3 className="feature-title">Relatório Ágil pós-reunião</h3>
              <p className="feature-text">
                O líder envia o relatório com lista de presentes, visitantes de primeira vez, conversões e oferta do encontro direto do celular antes de dormir.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <CalendarDays size={24} />
              </div>
              <h3 className="feature-title">Escalas de Ministérios Integradas</h3>
              <p className="feature-text">
                Monte escalas de louvor, músicos, recepcionistas, intercessão e brigada de apoio. Os voluntários recebem avisos e confirmam presença direto no app.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <UserCheck size={24} />
              </div>
              <h3 className="feature-title">Aprovação de Novos Membros</h3>
              <p className="feature-text">
                Quando um visitante ou membro pede para ingressar em uma célula pelo app, o líder recebe notificação e aprova ou redireciona para o grupo mais próximo.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15' }}>
                <Flame size={24} />
              </div>
              <h3 className="feature-title">Mapa e Indicadores de Multiplicação</h3>
              <p className="feature-text">
                Acompanhe o crescimento das redes (homens, mulheres, jovens, casais) e identifique quando um grupo atinge o limite saudável para multiplicação.
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
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre Células e Escalas</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'O líder de célula precisa de computador para enviar o relatório?',
                a: 'Não! O líder acessa o Cell Workspace diretamente no celular, marca os presentes com um toque e envia o resumo em menos de 1 minuto.'
              },
              {
                q: 'Como os voluntários são notificados da escala?',
                a: 'Ao ser escalado, o voluntário recebe uma notificação no app e pode visualizar todos os cultos e horários designados para o mês, podendo confirmar ou solicitar troca.'
              },
              {
                q: 'Funciona para igrejas que usam nomes diferentes (PGs, Grupos de Conexão, Redes)?',
                a: 'Sim! As nomenclaturas são flexíveis no painel administrativo do Faith Hub Studio, adaptando-se perfeitamente ao DNA do seu ministério.'
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
          <span className="badge-pill badge-member" style={{ margin: '0 auto 16px' }}>Pastoreio Saudável</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Fortaleça a comunhão e o pastoreio dos pequenos grupos
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Experimente o Cell Workspace Studio e capacite seus líderes de célula para liderar com excelência.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero ver uma demonstração do Cell Workspace e escalas de voluntários do Faith Hub.')}
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
