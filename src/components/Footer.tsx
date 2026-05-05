export const Footer = () => (
  <footer id="contato" className="bg-wine-deep text-background py-16">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-serif text-2xl">Sabor da Terra</h3>
        <p className="text-xs tracking-[0.25em] uppercase text-gold mt-1">Pousada · Restaurante</p>
        <p className="mt-5 text-sm text-background/70 leading-relaxed">
          Hospitalidade rústica e premium na Bahia. Onde cada hóspede é recebido como família
          e cada prato conta uma história.
        </p>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4 text-gold">Endereço</h4>
        <p className="text-sm text-background/70 leading-relaxed">
          Rodovia BA-093, Km 01<br />
          Econodata, Simões Filho — Bahia<br />
          CEP 43700-000
        </p>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4 text-gold">Contato</h4>
        <p className="text-sm text-background/70 leading-relaxed">
          WhatsApp: (71) 99999-9999<br />
          contato@saborraterra.com.br<br />
          Aberto 24 horas
        </p>
      </div>
    </div>
    <div className="container mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-xs text-background/50">© {new Date().getFullYear()} Pousada e Restaurante Sabor da Terra. Todos os direitos reservados.</p>
      <p className="text-xs text-background/50">Feito com tradição na Bahia.</p>
    </div>
  </footer>
);
