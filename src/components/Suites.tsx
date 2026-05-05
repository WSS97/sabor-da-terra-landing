import { Reveal } from "./Reveal";
import suitesImg from "@/assets/suites.jpg";
import { Lock, Sparkles, Moon } from "lucide-react";

const features = [
  { icon: Lock, title: "Entrada Discreta", desc: "Acesso reservado e independente, garantindo total privacidade." },
  { icon: Sparkles, title: "Ambiente Sofisticado", desc: "Decoração elegante, iluminação intimista e amenities selecionados." },
  { icon: Moon, title: "Disponível 24h", desc: "Recepção dedicada, com check-in flexível a qualquer hora." },
];

export const Suites = () => (
  <section id="suites" className="relative py-24 md:py-32 bg-wine-deep text-background overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
    </div>

    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Suítes Privativas</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 leading-tight">
            Um espaço <em className="text-gold not-italic">só seu.</em>
          </h2>
          <p className="mt-6 text-background/75 text-lg leading-relaxed">
            Para encontros, descanso reservado ou momentos a dois. Nossas suítes privativas
            oferecem o conforto da pousada com a discrição que você merece — sem julgamentos,
            com sofisticação.
          </p>

          <div className="mt-10 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-sm border border-gold/40 flex items-center justify-center text-gold">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-background">{f.title}</h4>
                  <p className="text-sm text-background/70 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <img src={suitesImg} alt="Suíte privativa sofisticada" loading="lazy" className="rounded-sm shadow-elegant w-full" width={1024} height={1024} />
            <div className="absolute inset-0 ring-1 ring-gold/30 rounded-sm pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
