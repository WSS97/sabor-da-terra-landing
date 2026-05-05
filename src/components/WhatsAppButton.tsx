import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5571999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Sabor%20da%20Terra.";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Reservas Imediatas via WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    <span className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-4 pr-5 py-3 rounded-full shadow-elegant transition-all duration-300 hover:scale-105">
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden sm:inline font-medium text-sm tracking-wide">Reservas Imediatas</span>
    </span>
  </a>
);
