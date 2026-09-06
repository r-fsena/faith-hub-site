import React, { useState } from 'react';
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  UserCheck,
  QrCode,
  Building2,
  Users
} from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const CarteirinhaDigitalPage: React.FC<Props> = ({ openWhatsAppLead }) => {
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
          <span className="breadcrumb-current">Carteirinha Digital de Membro</span>
        </nav>
      </div>

      <section className="module-hero">
        <div className="container module-hero-content">
          <div className="module-hero-text">
            <div className="badge-pill badge-member" style={{ marginBottom: '16px' }}>
              <Smartphone size={14} />
              <span>Identificação Oficial • Credencial Digital</span>
            </div>

            <h1 className="module-title">
              Carteirinha Digital de Membro: <span>Pertencimento, Foto e Validação Oficial no Celular</span>
            </h1>

            <p className="module-description">
              Esqueça os cartões plásticos caros que demoram semanas para serem impressos e são facilmente perdidos. A Carteirinha Digital do Faith Hub fica gravada direto no celular do membro, com foto oficial, data de batismo, congregação de vínculo, cargos e QR Code anti-fraude para validação instantânea.
            </p>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <button
                className="btn btn-primary"
                onClick={() => openWhatsAppLead('Olá! Quero conhecer a Carteirinha Digital de Membros do Faith Hub.')}
              >
                Conhecer a Carteirinha Digital
                <ArrowRight size={18} />
              </button>
              <a href="/" className="btn btn-outline">
                Ver Todo o Ecossistema
              </a>
            </div>

            <div className="module-highlights-row">
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>QR Code dinâmico anti-cópia</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Histórico de batismo e ordenação</span>
              </div>
              <div className="module-highlight-item">
                <CheckCircle2 size={16} color="#5EC2B8" />
                <span>Zero custo de emissão física</span>
              </div>
            </div>
          </div>

          <div className="module-hero-preview">
            <div className="feature-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-icon-box" style={{ background: 'rgba(15, 118, 110, 0.2)', color: '#2dd4bf' }}>
                  <UserCheck size={32} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff' }}>Credencial Oficial</h4>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Sempre atualizada na nuvem</span>
                </div>
              </div>
              
              <div className="spotlight-stats-grid">
                <div className="spotlight-stat">
                  <span className="stat-number">R$ 0</span>
                  <span className="stat-label">Custo com plástico</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">1 seg</span>
                  <span className="stat-label">Validação QR</span>
                </div>
                <div className="spotlight-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Vínculo com a sede</span>
                </div>
              </div>

              <div className="spotlight-badge-alert">
                <ShieldCheck size={18} color="#22c55e" />
                <span>Revogação instantânea: se o membro mudar de igreja, o acesso é desativado na hora.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES RESOLVIDAS */}
      <section className="section-module-details" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-pill badge-admin" style={{ margin: '0 auto 12px' }}>Gestão de Membresia</span>
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
              Vantagens da credencial digital para a secretaria da sua igreja
            </h2>
          </div>

          <div className="pilar-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <Smartphone size={24} />
              </div>
              <h3 className="feature-title">Sempre no Bolso do Membro</h3>
              <p className="feature-text">
                O membro não esquece a carteirinha em casa quando viaja para outra congregação ou convenção da denominação: está sempre salva no app no celular.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Building2 size={24} />
              </div>
              <h3 className="feature-title">Vínculo com a Filial Correta</h3>
              <p className="feature-text">
                Em redes com muitas filiais, a carteirinha estampa com clareza o campus ao qual o irmão pertence, seu pastor local e data de admissão.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                <Users size={24} />
              </div>
              <h3 className="feature-title">Agrupamento com Filhos e Cônjuge</h3>
              <p className="feature-text">
                O perfil do membro mostra a árvore familiar, conectando os pais aos filhos cadastrados no Ministério Kids para segurança total nas retiradas.
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
            <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Perguntas sobre a Carteirinha Digital</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {[
              {
                q: 'Como é feita a inclusão da foto do membro?',
                a: 'O membro pode enviar sua foto diretamente pelo app para aprovação da secretaria, ou a equipe pode tirar a foto no balcão de atendimento durante o culto.'
              },
              {
                q: 'É possível imprimir a carteirinha se algum idoso preferir?',
                a: 'Sim! No Faith Hub Studio, a secretaria pode gerar o arquivo pronto para impressão em PVC ou papel plastificado para membros que não usam smartphone.'
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
          <span className="badge-pill badge-member" style={{ margin: '0 auto 16px' }}>Identidade Pastoral</span>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>
            Dê aos membros da sua igreja uma credencial oficial moderna
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 32px' }}>
            Conheça o módulo de membros e carteirinha digital do Faith Hub e organize o cadastro da sua igreja.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppLead('Olá! Quero conhecer a Carteirinha Digital de Membro do Faith Hub.')}
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
