import { Reveal } from "./Reveal";
import { MapPin, Phone, Clock } from "lucide-react";

export const Localizacao = () => (
  <section id="localizacao" className="py-24 md:py-32 bg-gradient-warm">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Localização Estratégica</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
            Às margens da <em className="text-gold not-italic">BA-093</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Rodovia BA-093, Km 01 · Econodata, Simões Filho — Bahia. Fácil acesso, parada certa.
          </p>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6">
        <Reveal>
          <div className="bg-background p-7 rounded-sm shadow-soft border border-border h-full">
            <MapPin className="h-7 w-7 text-gold" strokeWidth={1.4} />
            <h3 className="font-serif text-xl text-primary mt-4">Endereço</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Rodovia BA-093, Km 01<br />Econodata · Simões Filho — BA
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="bg-background p-7 rounded-sm shadow-soft border border-border h-full">
            <Phone className="h-7 w-7 text-gold" strokeWidth={1.4} />
            <h3 className="font-serif text-xl text-primary mt-4">Reservas</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              WhatsApp: (71) 99999-9999<br />Telefone: (71) 3000-0000
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="bg-background p-7 rounded-sm shadow-soft border border-border h-full">
            <Clock className="h-7 w-7 text-gold" strokeWidth={1.4} />
            <h3 className="font-serif text-xl text-primary mt-4">Funcionamento</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Restaurante: 11h às 23h<br />Pousada & Suítes: 24 horas
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="mt-12 rounded-sm overflow-hidden shadow-elegant border border-border">
          <iframe
            title="Mapa Pousada Sabor da Terra"
            src="https://www.google.com/maps?q=Rodovia+BA-093+Km+01+Sim%C3%B5es+Filho+BA&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  </section>
);
