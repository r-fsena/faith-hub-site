import { useState } from 'react';
import './App.css';
import { AcquisitionPage } from './pages/AcquisitionPage';
import { ConditionsPage } from './pages/ConditionsPage';
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
      case '/planos': return <AcquisitionPage plansOnly />;
      case '/contratar':
      case '/teste-assistido':
      case '/ativacao': return <AcquisitionPage />;
      case '/condicoes-de-contratacao': return <ConditionsPage />;
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
        {!isHome && !['/planos','/contratar','/teste-assistido','/ativacao','/condicoes-de-contratacao'].includes(currentPath) && <section className="acq-public-callout"><h2>Leve essa experiência para sua igreja</h2><p>Contrate uma oferta ou solicite o teste assistido de 14 dias do Conectar.</p><div><a className="acq-btn" href={`/planos?origem=${encodeURIComponent(currentPath)}`}>Conhecer os planos</a><a className="acq-btn acq-secondary" href={`/teste-assistido?origem=${encodeURIComponent(currentPath)}`}>Solicitar teste Conectar</a></div></section>}

      </main>
      <Footer openWhatsAppLead={openWhatsAppLead} />
      <FloatingWhatsApp openWhatsAppLead={openWhatsAppLead} />
    </div>
  );
}

export default App;
