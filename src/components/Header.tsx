import React, { useState, useEffect } from 'react';

interface HeaderProps {
  openWhatsAppLead: (customText?: string) => void;
  isHome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ openWhatsAppLead, isHome = true }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleActionClick = () => {
    if (isHome) {
      document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      openWhatsAppLead('Olá! Gostaria de falar com um especialista e agendar uma demonstração do Faith Hub.');
    }
  };

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="header-wrapper">
      <nav className={`navbar container ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img
            src="/brand/logo-transparent.png"
            alt="Faith Hub"
            style={{ height: '36px', objectFit: 'contain' }}
          />
        </a>

        <div className="nav-links">
          <a href={getHref('#inicio')} className="nav-link">Início</a>
          <a href={getHref('#pilares')} className="nav-link">Diferenciais</a>
          <a href={getHref('#planos')} className="nav-link">Planos</a>
          <a href={getHref('#ecossistema')} className="nav-link">Funcionalidades</a>
          <a href={getHref('#seguranca')} className="nav-link">Segurança</a>
          <a href={getHref('#comparativo')} className="nav-link">Comparativo</a>
          <a href={getHref('#faq')} className="nav-link">Dúvidas</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="https://studio.faithhubs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-studio-pulse"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
            title="Acessar o Portal Web de Gestão Pastoral"
          >
            Acessar Studio
          </a>
          <button
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
            onClick={handleActionClick}
          >
            Falar com Especialista
          </button>
        </div>
      </nav>
    </header>
  );
};
