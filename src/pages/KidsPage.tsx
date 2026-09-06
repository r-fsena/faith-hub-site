import React, { useState } from 'react';
import {
  Baby,
  ShieldCheck,
  QrCode,
  Printer,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Smartphone,
  Lock,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const KidsPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Ministério Kids & Check-in</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-free" style={{ marginBottom: '16px' }}>
              <Baby size={14} />
              <span>Totem & Segurança Infantil • Alta Proteção</span>
            </div>

            <h1 className="module-title">
              Check-in Infantil Seguro para Igrejas: <span>Da Recepção à Devolução com Totem e PIN</span>
            </h1>

            <p className="module-description">
              Substitua as fichas de papel e o risco na entrega de crianças por uma solução blindada de autoatendimento. Totem expresso, crachás digitais, alertas instantâneos aos pais e PIN de segurança de 4 dígitos para devolução 100% segura.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer o Módulo de Check-in Kids do Faith Hub para minha igreja.')}
              >
                Solicitar Demonstração do Totem Kids
                <ArrowRight size={18} />
              </button>
              <a
                href="/"
                className="btn btn-outline"
              >
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>PIN de 4 dígitos na devolução</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Registro de alergias médicas</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Totem tablet ou celular</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                  <Baby size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>Totem Kids Faith Hub</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Check-in em menos de 15 segundos</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">0</span>
                  <span className="stat-label">Filas no culto</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Conferência de PIN</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">Real-time</span>
                  <span className="stat-label">Alerta aos pais</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Auditoria de entrada e saída por operador com data e hora exatas.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES QUE O FAITH HUB RESOLVE */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Segurança Preventiva</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Por que igrejas modernas estão abandonando fichas de papel no Ministério Infantil?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto' }}>
              A segurança das crianças é a maior responsabilidade e o maior ponto de vulnerabilidade em cultos e eventos com grande fluxo.
            </p>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                <AlertTriangle size={24} />
              </div>
              <h3 className="feature-title">Fim do Risco na Devolução</h3>
              <p className="feature-text">
                Fichas de papel perdem-se facilmente e não comprovam quem é o responsável legítimo. No Faith Hub, a devolução só é liberada mediante validação do PIN dinâmico de 4 dígitos cadastrado pelo responsável.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Clock size={24} />
              </div>
              <h3 className="feature-title">Agilidade Sem Filas na Recepção</h3>
              <p className="feature-text">
                Famílias com 2 ou mais filhos perdem o início do louvor preenchendo cadastros manuais. Com o Totem de Autoatendimento ou QR Code no app, a entrada é concluída em instantes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <HeartHandshake size={24} />
              </div>
              <h3 className="feature-title">Alertas Médicos & Cuidados Especiais</h3>
              <p className="feature-text">
                Restrições alimentares, alergias e medicamentos ficam visíveis na tela do líder de sala e no crachá digital da criança, evitando incidentes graves na hora do lanche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS DETALHADOS DO MÓDULO KIDS */}
      <section className="section-module-details">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Recursos Completos</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Tudo o que a liderança do Ministério Infantil precisa
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(94, 194, 184, 0.15)', color: '#5EC2B8' }}>
                <QrCode size={24} />
              </div>
              <h3 className="feature-title">Crachás Digitais & Impressão Térmica</h3>
              <p className="feature-text">
                Compatível com impressoras térmicas para impressão de etiquetas adesivas ou crachás digitais exibidos diretamente na tela do celular dos pais.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(15, 118, 110, 0.2)', color: '#2dd4bf' }}>
                <Lock size={24} />
              </div>
              <h3 className="feature-title">PIN de Segurança de 4 Dígitos</h3>
              <p className="feature-text">
                Código gerado a cada culto. Mesmo que outro familiar vá buscar a criança, o voluntário só efetua o checkout no sistema digitando o PIN correto.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Smartphone size={24} />
              </div>
              <h3 className="feature-title">Modo Totem em Tablets ou Celulares</h3>
              <p className="feature-text">
                Transforme qualquer tablet Android ou iPad da igreja em um totem de recepção interativo, intuitivo e com visual moderno.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15' }}>
                <Printer size={24} />
              </div>
              <h3 className="feature-title">Controle de Salas por Faixa Etária</h3>
              <p className="feature-text">
                Divisão automática de turmas: Berçário (0-2 anos), Maternal (3-4 anos), Crianças (5-8 anos) e Pré-adolescentes, respeitando a lotação de cada espaço.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}>
                <AlertTriangle size={24} />
              </div>
              <h3 className="feature-title">Notificação de Pais em Tempo Real</h3>
              <p className="feature-text">
                Se o bebê chorar ou houver necessidade de fralda/atendimento, o voluntário envia uma notificação silenciosa para o app do responsável no meio do culto.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 className="feature-title">Trilha de Auditoria & LGPD</h3>
              <p className="feature-text">
                Histórico completo e inalterável de quem fez o check-in, quem fez a retirada, em qual segundo e sob qual voluntário responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ESPECÍFICO DO CHECK-IN KIDS */}
      <section className="faq-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Dúvidas Frequentes</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre o Módulo Kids</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Preciso comprar totens caros de metal para usar o check-in?',
                a: 'Não! O sistema de Totem do Faith Hub roda em qualquer navegador moderno. Você pode usar tablets simples (iPad ou Android), celulares dos voluntários ou notebooks de apoio.'
              },
              {
                q: 'Como funciona para visitantes que nunca foram à igreja?',
                a: 'O Totem do Faith Hub possui o fluxo de "Acesso Livre / Visitante Expresso": os pais preenchem nome, celular e dados da criança em menos de 1 minuto e já recebem o PIN e o crachá na primeira visita.'
              },
              {
                q: 'O que acontece se os pais perderem o PIN ou o celular ficar sem bateria?',
                a: 'O líder ou supervisor do Ministério Kids possui acesso administrativo no Faith Hub Studio para autenticar os pais através do documento oficial com foto e registrar a liberação assistida com auditoria.'
              },
              {
                q: 'É possível imprimir etiquetas físicas adesivas?',
                a: 'Sim! O sistema é compatível com impressoras térmicas padrão de mercado (ESC/POS, Zebra, Brother), imprimindo a etiqueta da criança e a etiqueta de contra-guia do responsável.'
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

      {/* CTA FINAL DO MÓDULO */}
      <section className="demo-section" style={{ background: 'linear-gradient(180deg, #091a18 0%, #061111 100%)' }}>
        <div className="container demo-content" style={{ textAlign: 'center' }}>
          <span className="badge-pill badge-free" style={{ margin: '0 auto 16px' }}>Demonstração Gratuita</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Pronto para transformar a segurança das crianças na sua igreja?
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Agende uma demonstração prática do Totem Kids e veja como é fácil configurar para o próximo culto da sua comunidade.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Gostaria de agendar uma demonstração do Totem e Check-in Kids do Faith Hub.')}
            >
              Falar com Especialista no WhatsApp
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
