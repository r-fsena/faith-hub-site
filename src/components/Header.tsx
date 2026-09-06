import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  BookOpen,
  Baby,
  CreditCard,
  Layers,
  Building2,
  Ticket,
  Store,
  Heart,
  MessageSquare,
  Smartphone,
  Video,
  Sun,
  Flame,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  openWhatsAppLead: (customText?: string) => void;
  isHome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ openWhatsAppLead, isHome = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

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

          {/* DROPDOWN FUNCIONALIDADES */}
          <div
            className={`nav-dropdown-wrapper ${dropdownOpen ? 'active' : ''}`}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="nav-link nav-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              <span>Funcionalidades</span>
              <ChevronDown size={14} className={`chevron-icon ${dropdownOpen ? 'rotated' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="mega-menu-dropdown animate-fade-in">
                <div className="mega-menu-grid">
                  {/* COLUNA 1: APP DO MEMBRO */}
                  <div className="mega-menu-col">
                    <div className="mega-menu-col-header">
                      <Smartphone size={15} color="#5EC2B8" />
                      <span>App do Membro (PWA)</span>
                    </div>

                    <a href="/biblia-offline" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(15, 118, 110, 0.15)', color: '#0f766e' }}>
                        <BookOpen size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Bíblia 100% Offline</strong>
                        <span>66 livros sem precisar de internet</span>
                      </div>
                    </a>

                    <a href="/kids" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                        <Baby size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Check-in Kids & Totem</strong>
                        <span>PIN de segurança de 4 dígitos na devolução</span>
                      </div>
                    </a>

                    <a href="/dizimos-pix" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(147, 51, 234, 0.15)', color: '#9333ea' }}>
                        <CreditCard size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Dízimos & Ofertas PIX</strong>
                        <span>Chave dinâmica por congregação/filial</span>
                      </div>
                    </a>

                    <a href="/celulas" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563eb' }}>
                        <Layers size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Células, Redes & Escalas</strong>
                        <span>Relatórios e escalas de voluntários no app</span>
                      </div>
                    </a>

                    <a href="/eventos-ingressos" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#ea580c' }}>
                        <Ticket size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Eventos & Ingressos QR Code</strong>
                        <span>Inscrições sem taxas e portaria ágil</span>
                      </div>
                    </a>

                    <a href="/cantina-livraria" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(5, 150, 105, 0.15)', color: '#059669' }}>
                        <Store size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Cantina & Livraria da Igreja</strong>
                        <span>Cardápio mobile e pedidos com Kanban</span>
                      </div>
                    </a>
                  </div>

                  {/* COLUNA 2: COMUNHÃO & GESTÃO */}
                  <div className="mega-menu-col">
                    <div className="mega-menu-col-header">
                      <Building2 size={15} color="#5EC2B8" />
                      <span>Comunhão & Governança Studio</span>
                    </div>

                    <a href="/multi-campus" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(15, 118, 110, 0.2)', color: '#2dd4bf' }}>
                        <Building2 size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Governança Multi-Campi</strong>
                        <span>Segregação estrita para redes de igrejas</span>
                      </div>
                    </a>

                    <a href="/visitantes" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                        <Flame size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Recepção de Visitantes</strong>
                        <span>"Sou Novo Aqui" sem constrangimento</span>
                      </div>
                    </a>

                    <a href="/mural-oracao" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}>
                        <MessageSquare size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Mural de Oração Comunitário</strong>
                        <span>Intercessão com botão "Estou Orando"</span>
                      </div>
                    </a>

                    <a href="/carteirinha-digital" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                        <Smartphone size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Carteirinha Digital do Membro</strong>
                        <span>Foto nativa, histórico e validação QR</span>
                      </div>
                    </a>

                    <a href="/cultos-ao-vivo" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                        <Video size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Cultos ao Vivo & Transmissões</strong>
                        <span>YouTube integrado sem distrações</span>
                      </div>
                    </a>

                    <a href="/devocionais" className="mega-menu-item" onClick={() => setDropdownOpen(false)}>
                      <div className="mega-item-icon" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}>
                        <Sun size={17} />
                      </div>
                      <div className="mega-item-text">
                        <strong>Devocionais Diários</strong>
                        <span>Meditações assinadas pela liderança pastoral</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* RODAPÉ DO DROPDOWN */}
                <div className="mega-menu-footer">
                  <a href={getHref('#ecossistema')} onClick={() => setDropdownOpen(false)}>
                    <span>Ver comparativo e todos os módulos na Página Inicial</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>

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
