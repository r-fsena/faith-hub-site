import React, { useState } from 'react';
import {
  Store,
  CreditCard,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Clock,
  Layers,
  ShoppingBag
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const CantinaLivrariaPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Cantina & Livraria da Igreja</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Store size={14} />
              <span>PDV Mobile & Cantina Ágil</span>
            </div>

            <h1 className="module-title">
              Cantina & Livraria da Igreja: <span>Cardápio Mobile, PIX e Kanban de Pedidos Sem Filas</span>
            </h1>

            <p className="module-description">
              O fim do tumulto e das filas intermináveis no intervalo do culto. O membro escolhe o lanche ou compra livros pelo aplicativo, paga via PIX ou cartão, e a equipe da cantina prepara os pedidos com organização visual em um painel Kanban em tempo real.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o Módulo de Cantina e PDV Mobile do Faith Hub.')}
              >
                Conhecer a Cantina Digital
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Pedido antecipado no meio do culto</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Kanban para a equipe da cozinha</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Caixa e estoque fechados por culto</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(5, 150, 105, 0.15)', color: '#059669' }}>
                  <ShoppingBag size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>PDV & Cantina Ágil</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Retirada expressa no balcão</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">0</span>
                  <span className="stat-label">Filas no balcão</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Instant</span>
                  <span className="stat-label">PIX na cantina</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Controle de caixa</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Contabilidade segregada: o caixa da cantina não se mistura com dízimos gerais.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Eficiência no Culto</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Como a cantina moderna da igreja deve funcionar
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <Clock size={24} />
              </div>
              <h3 className="feature-title">Fim do Tumulto de 15 Minutos</h3>
              <p className="feature-text">
                Quando o culto termina, dezenas de famílias correm juntas para o balcão. Com o pedido feito pelo app, a pessoa só chega na bancada para retirar o pacote pronto com sua senha.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Layers size={24} />
              </div>
              <h3 className="feature-title">Kanban de Pedidos na Cozinha</h3>
              <p className="feature-text">
                A equipe da cantina acompanha uma tela com três colunas: "Recebidos", "Em Preparo" e "Prontos para Retirada", garantindo que nenhum salgado ou café fique esquecido.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <CreditCard size={24} />
              </div>
              <h3 className="feature-title">Fechamento de Caixa Automático</h3>
              <p className="feature-text">
                Ao final do culto, o operador encerra o turno e gera o relatório completo de itens vendidos, valores arrecadados em dinheiro/PIX e lucro líquido da cantina.
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
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre a Cantina & Livraria</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Quem não tem o app pode comprar normalmente na cantina?',
                a: 'Sim! Os voluntários da cantina possuem a tela de Caixa Rápido no Faith Hub Studio para registrar pedidos no balcão e aceitar dinheiro ou cartão físico.'
              },
              {
                q: 'É possível usar para vender livros, bíblias e camisetas da igreja?',
                a: 'Com certeza. O catálogo permite criar categorias para Salgados, Bebidas, Livros, Bíblias e Produtos Ministeriais com fotos e controle de estoque.'
              },
              {
                q: 'Cada congregação pode ter seu próprio cardápio e preços?',
                a: 'Sim! Se uma congregação vende itens diferentes ou pratica valores ajustados, o cardápio e o caixa são 100% isolados por congregação.'
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
          <span className="badge-pill badge-free" style={{ margin: '0 auto 16px' }}>Comunhão & Praticidade</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Modernize a cantina e os produtos da sua igreja
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Veja uma demonstração do PDV Mobile e como organizar as vendas de lanches e livros no próximo culto.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero conhecer o sistema de Cantina e PDV Mobile do Faith Hub.')}
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
