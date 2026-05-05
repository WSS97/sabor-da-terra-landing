import { UtensilsCrossed, BedDouble, KeyRound, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pousada.jpg";

const cards = [
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    subtitle: "Sabores da Terra",
    desc: "Cozinha regional, ingredientes frescos e o tempero da Bahia.",
    href: "#restaurante",
  },
  {
    icon: BedDouble,
    title: "Pousada",
    subtitle: "Descanso na Estrada",
    desc: "Acolhimento para viajantes da BA-093 e estadias prolongadas.",
    href: "#pousada",
  },
  {
    icon: KeyRound,
    title: "Suítes Privativas",
    subtitle: "Discrição & Conforto",
    desc: "Ambientes reservados, com sofisticação e privacidade absoluta.",
    href: "#suites",
  },
];

export const Hero = () => (
  <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Entrada acolhedora da Pousada Sabor da Terra ao entardecer"
        className="h-full w-full object-cover animate-slow-zoom"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-wine-deep/30" />
    </div>

    <div className="relative container min-h-[100svh] flex flex-col justify-center pt-32 pb-24">
      <div className="max-w-3xl animate-fade-in">
        <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.4em] uppercase mb-6">
          <span className="h-px w-10 bg-gold" /> Simões Filho · Bahia
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[1.02] font-medium">
          Pousada e Restaurante
          <span className="block text-gold italic font-normal">Sabor da Terra</span>
        </h1>
        <p className="mt-6 text-background/85 text-lg md:text-xl max-w-xl font-light leading-relaxed">
          Tradição rústica, hospitalidade premium. Um refúgio às margens da Rodovia BA-093,
          onde a mesa, a cama e o silêncio se encontram.
        </p>
      </div>

      <div className="mt-14 md:mt-20 grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <a
            key={c.title}
            href={c.href}
            className="group relative bg-background/95 backdrop-blur-sm hover:bg-background transition-all duration-500 p-7 rounded-sm border border-background/20 shadow-elegant hover:shadow-gold hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${200 + i * 120}ms` }}
          >
            <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
            <c.icon className="h-8 w-8 text-primary mb-5" strokeWidth={1.4} />
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">{c.subtitle}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-primary mb-3">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide">
              Conheça <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
