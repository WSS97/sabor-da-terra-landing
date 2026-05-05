import { Reveal } from "./Reveal";
import restauranteImg from "@/assets/restaurante.jpg";
import diningImg from "@/assets/dining.jpg";

const menu = [
  { name: "Moqueca de Peixe", desc: "Peixe fresco no leite de coco, dendê e coentro.", price: "R$ 89" },
  { name: "Galinha Caipira", desc: "Cozida lentamente com legumes da horta e farofa.", price: "R$ 72" },
  { name: "Bobó de Camarão", desc: "Receita tradicional baiana, cremoso e perfumado.", price: "R$ 95" },
  { name: "Carne de Sol c/ Macaxeira", desc: "Servida na manteiga de garrafa, com queijo coalho.", price: "R$ 78" },
  { name: "Feijoada da Casa", desc: "Aos sábados — completa, com couve e laranja.", price: "R$ 65" },
  { name: "Cocada Cremosa", desc: "Sobremesa artesanal, finalizada na hora.", price: "R$ 22" },
];

export const Restaurante = () => (
  <section id="restaurante" className="relative py-24 md:py-32 bg-gradient-warm overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <Reveal>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">O Restaurante</span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary mt-4 leading-tight">
            O verdadeiro <em className="text-gold not-italic">sabor</em> da nossa terra.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Pratos preparados com receitas que atravessam gerações. Ingredientes regionais,
            tempero baiano e o calor de uma cozinha de verdade — feita com tempo, fogão à lenha
            e o que a nossa terra oferece de melhor.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/70">
            <span>· Almoço diário 11h–15h</span>
            <span>· Jantar 18h–23h</span>
            <span>· Feijoada aos sábados</span>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <img src={restauranteImg} alt="Prato regional baiano" loading="lazy" className="rounded-sm shadow-elegant w-full" width={1024} height={1024} />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-wine text-primary-foreground p-6 rounded-sm shadow-elegant max-w-[220px]">
              <p className="font-serif text-3xl text-gold leading-none">12+</p>
              <p className="text-xs tracking-widest uppercase mt-2 opacity-80">anos servindo a região</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Cardápio</span>
          <h3 className="font-serif text-3xl md:text-4xl text-primary mt-3">Pratos da Casa</h3>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl mx-auto">
        {menu.map((item, i) => (
          <Reveal key={item.name} delay={i * 60}>
            <div className="flex items-baseline gap-4 py-5 border-b border-border/70">
              <div className="flex-1">
                <h4 className="font-serif text-xl text-primary">{item.name}</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-snug">{item.desc}</p>
              </div>
              <span className="font-serif text-lg text-gold whitespace-nowrap">{item.price}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 relative rounded-sm overflow-hidden shadow-elegant">
          <img src={diningImg} alt="Salão rústico do restaurante" loading="lazy" className="w-full h-[280px] md:h-[420px] object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent flex items-end p-8 md:p-12">
            <p className="font-serif text-2xl md:text-4xl text-background max-w-xl italic">
              "Aqui a comida tem nome, tem origem e tem alma."
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
