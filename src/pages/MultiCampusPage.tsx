import React, { useState } from 'react';
import {
  Building2,
  ShieldCheck,
  Layers,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Globe2,
  Lock,
  BarChart3
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const MultiCampusPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <a href="/#seguranca" className="breadcrumb-link">Governança</a>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Gestão Multi-Campus</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-admin" style={{ marginBottom: '16px' }}>
              <Building2 size={14} />
              <span>Redes & Congregações • Multi-Tenant Nativo</span>
            </div>

            <h1 className="module-title">
              Gestão Multi-Campus para Redes de Igrejas: <span>Autonomia Local com Controle Geral Blindado</span>
            </h1>

            <p className="module-description">
              Crescer em número de filiais não precisa significar desorganização ou perda de controle. O Faith Hub foi concebido desde a primeira linha de código para operações multi-campi: dados estritamente segregados, cantinas e tesourarias locais independentes e consolidação executiva instantânea para os pastores seniores na Sede.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer a solução Multi-Campus do Faith Hub para nossa rede de igrejas.')}
              >
                Agendar Reunião de Governança
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Isolamento estrito entre filiais</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Painel consolidado da Sede</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Papéis RBAC por campus</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(15, 118, 110, 0.2)', color: '#2dd4bf' }}>
                  <Globe2 size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff' }}>Hub de Redes & Filiais</h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Visão micro e macro em tempo real</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">N Filiais</span>
                  <span className="stat-label">Sem limite</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Segregação física</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">1 Clique</span>
                  <span className="stat-label">Troca de campus</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Proteção anti-vazamento entre congregações (Multi-Tenant First).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES MULTI-CAMPUS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-free" style={{ margin: '0 auto 12px' }}>Arquitetura Corporativa</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Como o Faith Hub resolve os maiores desafios de congregações em expansão
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Lock size={24} />
              </div>
              <h3 className="feature-title">Segurança e Segregação Absoluta</h3>
              <p className="feature-text">
                O pastor e o tesoureiro do Campus B nunca têm acesso aos dados confidenciais, relatórios ou membros do Campus A. Cada filial opera em uma bolha de proteção independente.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <BarChart3 size={24} />
              </div>
              <h3 className="feature-title">Visão Executiva Consolidada na Sede</h3>
              <p className="feature-text">
                A liderança geral (Pastores Presidentes, Bispos ou Direção Executiva) visualiza a soma de membros, presenças em cultos, entradas financeiras e novos convertidos de todas as congregações ao vivo.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Users size={24} />
              </div>
              <h3 className="feature-title">Mobilidade Fluida de Membros</h3>
              <p className="feature-text">
                Se um membro frequenta a filial sede no domingo de manhã e participa do culto de jovens na congregação da praia à noite, o mesmo app reconhece seu perfil sem necessidade de recadastros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Tire suas Dúvidas</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre Redes & Multi-Campus</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Como funciona a cobrança para igrejas com várias filiais?',
                a: 'O Faith Hub possui o plano "Redes & Multi-Campi", desenhado sob medida para o tamanho da sua convenção ou ministério, oferecendo economia de escala e condições unificadas.'
              },
              {
                q: 'É possível ter cantinas e eventos separados por campus?',
                a: 'Sim! Os cardápios da cantina, os produtos da livraria e os ingressos de conferências são segmentados por filial, permitindo que cada uma tenha sua própria portaria e caixa.'
              },
              {
                q: 'Posso transferir o cadastro de um membro de uma filial para outra?',
                a: 'Sim, com total rastreabilidade. A liderança pastoral pode transferir a vinculação do membro mantendo seu histórico de batismo, dados familiares e cargos pastorais intactos.'
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
          <span className="badge-pill badge-free" style={{ margin: '0 auto 16px' }}>Governança Eclesiástica</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Unifique a gestão de todas as congregações da sua rede
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Agende uma apresentação executiva para o Conselho Pastoral da sua igreja e conheça o Faith Hub em ação.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Gostaria de uma demonstração focada em governança multi-campus para nossa rede de igrejas.')}
            >
              Falar com o Diretor de Contas
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
