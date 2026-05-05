import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Restaurante } from "@/components/Restaurante";
import { Pousada } from "@/components/Pousada";
import { Suites } from "@/components/Suites";
import { Localizacao } from "@/components/Localizacao";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Pousada e Restaurante Sabor da Terra · Simões Filho — BA";
    const desc = "Pousada, restaurante regional e suítes privativas na BA-093, Km 01, Simões Filho. Hospitalidade rústica e premium 24h. Reservas pelo WhatsApp.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); }
    m.setAttribute('content', desc);
  }, []);
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Restaurante />
      <Pousada />
      <Suites />
      <Localizacao />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
