import React from 'react';

interface FooterProps {
  openWhatsAppLead: (customText?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ openWhatsAppLead }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" style={{ display: 'inline-block' }}>
              <img
                src="/brand/logo-white.png"
                alt="Faith Hub"
                style={{ height: '38px', objectFit: 'contain', marginBottom: '12px' }}
              />
            </a>
            <p style={{ marginTop: '8px' }}>
              O ecossistema definitivo para a igreja local. Conectando pessoas e unificando a gestão pastoral em tempo real.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', marginBottom: '14px', fontSize: '0.96rem' }}>Soluções & Módulos</h5>
            <a href="/kids">Check-in Kids & Totem</a>
            <a href="/dizimos-pix">Dízimos & Ofertas PIX</a>
            <a href="/biblia-offline">Bíblia Sagrada 100% Offline</a>
            <a href="/multi-campus">Governança Multi-Campi</a>
            <a href="/celulas">Células & Escalas de Apoio</a>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', marginBottom: '14px', fontSize: '0.96rem' }}>Institucional</h5>
            <a href="/#inicio">Início</a>
            <a href="/#pilares">Diferenciais</a>
            <a href="/#planos">Planos por Porte</a>
            <a href="/#seguranca">Segurança & LGPD</a>
            <a href="/#comparativo">Comparativo</a>
            <a href="/#faq">Perguntas Frequentes</a>
            <a href="https://studio.faithhubs.com" target="_blank" rel="noopener noreferrer">Acesso Studio</a>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', marginBottom: '14px', fontSize: '0.96rem' }}>Fale Conosco</h5>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>contato@faithhub.com.br</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.88rem' }}>WhatsApp: (48) 9 9107-9478</p>
            <div style={{ marginTop: '16px' }}>
              <button
                type="button"
                onClick={() => openWhatsAppLead('Olá! Preciso de suporte ou informações comerciais do Faith Hub.')}
                className="btn btn-outline"
                style={{ color: '#ffffff', borderColor: '#334155', padding: '8px 16px', fontSize: '0.80rem', cursor: 'pointer' }}
              >
                💬 (48) 9 9107-9478
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Faith Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
