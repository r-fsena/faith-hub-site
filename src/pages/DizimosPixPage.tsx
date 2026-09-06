import React, { useState } from 'react';
import {
  CreditCard,
  QrCode,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Receipt,
  ChevronRight,
  Coins
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const DizimosPixPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Dízimos & Ofertas via PIX</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-admin" style={{ marginBottom: '16px' }}>
              <Coins size={14} />
              <span>Gestão Financeira & PIX Nativo</span>
            </div>

            <h1 className="module-title">
              Dízimos e Ofertas via PIX para Igrejas: <span>Conciliação Automática e Transparência por Congregação</span>
            </h1>

            <p className="module-description">
              Elimine o trabalho manual da tesouraria aos domingos à noite. O membro contribui em poucos segundos com PIX dinâmico no app da sua igreja, e o valor é creditado com conciliação automática, extrato em tempo real e comprovante fiscal digital.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o Módulo de Dízimos e Ofertas via PIX do Faith Hub.')}
              >
                Conhecer a Gestão Financeira PIX
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>QR Code dinâmico Copia e Cola</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Contas separadas por filial</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Extratos para a tesouraria</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                  <CreditCard size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>PIX Eclesiástico Integrado</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Conciliação em tempo real</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">Instant</span>
                  <span className="stat-label">Liquidação PIX</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Comprovantes salvos</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Zero</span>
                  <span className="stat-label">Erros de conferência</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Segregação estrita por congregação com relatório consolidado para a Sede.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Fim da Burocracia</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Os desafios que a tesouraria da sua igreja não precisa mais enfrentar
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <Receipt size={24} />
              </div>
              <h3 className="feature-title">Fim dos Comprovantes de WhatsApp</h3>
              <p className="feature-text">
                Chega de receber prints ilegíveis de PIX no celular do pastor ou tesoureiro. Cada doação feita via Faith Hub gera conciliação automática vinculada ao CPF ou identificador do membro.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <FileSpreadsheet size={24} />
              </div>
              <h3 className="feature-title">Planilhas Manuais que Não Batem</h3>
              <p className="feature-text">
                Esqueça horas na segunda-feira digitando extratos bancários linha por linha. O Faith Hub categoriza dízimos, ofertas de missões, ofertas de construção e cantina automaticamente.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Building2 size={24} />
              </div>
              <h3 className="feature-title">Contas Misturadas de Filiais</h3>
              <p className="feature-text">
                Para redes com várias filiais, o sistema permite que cada campus tenha sua própria chave PIX e conta corrente, mantendo total transparência contábil local com visão geral na sede.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS DO PIX */}
      <section className="section-module-details">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Funcionalidades</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Transparência e Praticidade para Membros e Tesoureiros
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <QrCode size={24} />
              </div>
              <h3 className="feature-title">QR Code PIX Copia & Cola Dinâmico</h3>
              <p className="feature-text">
                O membro digita o valor pretendido ou escolhe um valor rápido, e o app gera o código PIX dinâmico com valor exato, pronto para colar no banco.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.2)', color: '#2dd4bf' }}>
                <TrendingUp size={24} />
              </div>
              <h3 className="feature-title">Destinação Específica de Ofertas</h3>
              <p className="feature-text">
                O doador pode selecionar a finalidade da oferta: Dízimo Geral, Missões Nacionais/Mundiais, Ministério de Jovens, Construção do Templo ou Ação Social.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                <Receipt size={24} />
              </div>
              <h3 className="feature-title">Extrato Histórico no Perfil do Membro</h3>
              <p className="feature-text">
                O membro visualiza seu histórico anual de contribuições no app de forma sigilosa, facilitando o acompanhamento de dízimos e emissão de declarações.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15' }}>
                <Building2 size={24} />
              </div>
              <h3 className="feature-title">Gestão Multi-Conta por Filial</h3>
              <p className="feature-text">
                Configure dados bancários diferentes para cada congregação. A liderança regional responde por suas finanças com relatórios consolidados no Faith Hub Studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Tire suas dúvidas</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre Dízimos via PIX</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'O dinheiro passa por alguma conta intermediária do Faith Hub?',
                a: 'Não! O Faith Hub integra diretamente as contas bancárias ou gateways da própria igreja. Os valores pagos via PIX caem diretamente na conta corrente da instituição cadastrada.'
              },
              {
                q: 'O membro precisa baixar um app na App Store para conseguir dizimar?',
                a: 'Não. O app do Faith Hub é uma Progressive Web App (PWA). O membro pode contribuir pelo navegador do celular, computador ou pelo atalho instalado na tela de início.'
              },
              {
                q: 'O sistema emite relatório para prestação de contas no Conselho Fiscal?',
                a: 'Sim! Com 1 clique no Faith Hub Studio, a tesouraria gera relatórios mensais e anuais em PDF ou planilha com o resumo de entradas, categorias e conciliações.'
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

      {/* CTA FINAL */}
      <section className="demo-section" style={{ background: 'linear-gradient(180deg, #091a18 0%, #061111 100%)' }}>
        <div className="container demo-content" style={{ textAlign: 'center' }}>
          <span className="badge-pill badge-admin" style={{ margin: '0 auto 16px' }}>Modernize sua Tesouraria</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Transforme as contribuições da sua igreja com facilidade e segurança
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Fale com nossa equipe e veja como estruturar o PIX dinâmico para a sede e filiais da sua igreja.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero ver como funciona o dízimo via PIX do Faith Hub.')}
            >
              Falar com um Consultor Financeiro
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
