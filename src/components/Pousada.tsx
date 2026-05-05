import { Reveal } from "./Reveal";
import { Wifi, Car, Wind, Clock, Coffee, ShieldCheck } from "lucide-react";
import pousadaImg from "@/assets/pousada.jpg";

const amenities = [
  { icon: Car, label: "Estacionamento Gratuito" },
  { icon: Wifi, label: "WiFi de Alta Velocidade" },
  { icon: Wind, label: "Ar-Condicionado" },
  { icon: Clock, label: "Atendimento 24 horas" },
  { icon: Coffee, label: "Café da Manhã Regional" },
  { icon: ShieldCheck, label: "Segurança & Privacidade" },
];

export const Pousada = () => (
  <section id="pousada" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={pousadaImg} alt="Suíte aconchegante da pousada" loading="lazy" className="rounded-sm shadow-elegant w-full" width={1024} height={1024} />
            <div className="absolute -top-6 -right-6 hidden md:block bg-gradient-gold text-primary-deep p-6 rounded-sm shadow-gold max-w-[200px]">
              <p className="text-xs tracking-widest uppercase opacity-80">Estadias</p>
              <p className="font-serif text-2xl mt-1 leading-tight">Curtas & Prolongadas</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">A Pousada</span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary mt-4 leading-tight">
            Descanso na <em className="text-gold not-italic">estrada</em>, conforto em casa.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Para o viajante da BA-093, o motorista de longa rota ou a família em passagem por
            Simões Filho. Quartos limpos, camas confortáveis e o silêncio que só uma boa pousada oferece.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-3 p-3 rounded-sm bg-muted/50 hover:bg-gold-soft transition-colors">
                <a.icon className="h-5 w-5 text-primary shrink-0" strokeWidth={1.6} />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
