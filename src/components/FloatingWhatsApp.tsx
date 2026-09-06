import React from 'react';
import { MessageCircle } from 'lucide-react';

interface Props {
  openWhatsAppLead: (customText?: string) => void;
}

export const FloatingWhatsApp: React.FC<Props> = ({ openWhatsAppLead }) => {
  return (
    <button
      type="button"
      onClick={() => openWhatsAppLead('Olá! Estou no site do Faith Hub e gostaria de falar com um especialista.')}
      className="floating-whatsapp-btn"
      title="Fale ao vivo com nosso especialista no WhatsApp"
      aria-label="Falar com Especialista no WhatsApp"
    >
      <div className="whatsapp-icon-circle">
        <MessageCircle size={22} color="#ffffff" />
      </div>
      <div className="whatsapp-text-box">
        <span className="whatsapp-badge-online"><span className="online-dot" /> Online Agora</span>
        <span className="whatsapp-title">Falar com Especialista</span>
      </div>
    </button>
  );
};
