import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { KidsPage } from './pages/KidsPage';
import { DizimosPixPage } from './pages/DizimosPixPage';
import { BibliaOfflinePage } from './pages/BibliaOfflinePage';
import { MultiCampusPage } from './pages/MultiCampusPage';
import { CelulasPage } from './pages/CelulasPage';
import { EventosIngressosPage } from './pages/EventosIngressosPage';
import { CantinaLivrariaPage } from './pages/CantinaLivrariaPage';
import { VisitantesPage } from './pages/VisitantesPage';
import { MuralOracaoPage } from './pages/MuralOracaoPage';
import { CarteirinhaDigitalPage } from './pages/CarteirinhaDigitalPage';
import { CultosAoVivoPage } from './pages/CultosAoVivoPage';
import { DevocionaisPage } from './pages/DevocionaisPage';

interface AppProps {
  initialPath?: string;
}

export function App({ initialPath }: AppProps = {}) {
  const [currentPath] = useState(() => {
    if (initialPath) return initialPath.replace(/\/+$/, '') || '/';
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/+$/, '') || '/';
      return p;
    }
    return '/';
  });

  const openWhatsAppLead = (customText?: string) => {
    const defaultMsg =
      customText ||
      'Olá! Gostaria de falar com um especialista do Faith Hub e conhecer a plataforma para a minha igreja.';
    if (typeof window !== 'undefined') {
      window.open(
        `https://api.whatsapp.com/send?phone=5548991079478&text=${encodeURIComponent(defaultMsg)}`,
        '_blank'
      );
    }
  };

  const isHome = currentPath === '/' || currentPath === '';

  const renderContent = () => {
    switch (currentPath) {
      case '/kids':
        return <KidsPage openWhatsAppLead={openWhatsAppLead} />;
      case '/dizimos-pix':
        return <DizimosPixPage openWhatsAppLead={openWhatsAppLead} />;
      case '/biblia-offline':
        return <BibliaOfflinePage openWhatsAppLead={openWhatsAppLead} />;
      case '/multi-campus':
        return <MultiCampusPage openWhatsAppLead={openWhatsAppLead} />;
      case '/celulas':
        return <CelulasPage openWhatsAppLead={openWhatsAppLead} />;
      case '/eventos-ingressos':
        return <EventosIngressosPage openWhatsAppLead={openWhatsAppLead} />;
      case '/cantina-livraria':
        return <CantinaLivrariaPage openWhatsAppLead={openWhatsAppLead} />;
      case '/visitantes':
        return <VisitantesPage openWhatsAppLead={openWhatsAppLead} />;
      case '/mural-oracao':
        return <MuralOracaoPage openWhatsAppLead={openWhatsAppLead} />;
      case '/carteirinha-digital':
        return <CarteirinhaDigitalPage openWhatsAppLead={openWhatsAppLead} />;
      case '/cultos-ao-vivo':
        return <CultosAoVivoPage openWhatsAppLead={openWhatsAppLead} />;
      case '/devocionais':
        return <DevocionaisPage openWhatsAppLead={openWhatsAppLead} />;
      default:
        return <HomePage openWhatsAppLead={openWhatsAppLead} />;
    }
  };

  return (
    <div className="dot-pattern-bg min-h-screen">
      <Header openWhatsAppLead={openWhatsAppLead} isHome={isHome} />
      <main id="main-content">
        {renderContent()}
      </main>
      <Footer openWhatsAppLead={openWhatsAppLead} />
      <FloatingWhatsApp openWhatsAppLead={openWhatsAppLead} />
    </div>
  );
}

export default App;
