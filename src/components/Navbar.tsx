import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#restaurante", label: "Restaurante" },
  { href: "#pousada", label: "Pousada" },
  { href: "#suites", label: "Suítes" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className={`font-serif text-2xl font-semibold tracking-tight ${scrolled ? "text-primary" : "text-background"}`}>
            Sabor da Terra
          </span>
          <span className={`text-[10px] uppercase tracking-[0.25em] mt-0.5 ${scrolled ? "text-muted-foreground" : "text-gold"}`}>
            Pousada · Restaurante
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className={`md:hidden ${scrolled ? "text-primary" : "text-background"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border mt-3">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground py-2 border-b border-border/50 text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
