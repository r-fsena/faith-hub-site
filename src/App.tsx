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
