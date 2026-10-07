import { Crown, Shirt } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const PLANS = [
  { variant: "free", tag: "Gratuito", icon: Shirt, big: "30", unit: "peças", title: "Para começar o seu acervo.", items: ["Até 30 peças cadastradas", "5 combinações por dia"] },
  { variant: "premium", tag: "Premium", icon: Crown, big: "∞", unit: "sem limites", title: "Para o armário inteiro, todos os dias.", items: ["Peças ilimitadas", "Combinações ilimitadas"] },
];

const REVENUE = [
  ["01", "Assinatura Premium", "Para quem quer usar o acervo completo, sem limites."],
  ["02", "Comissões de afiliação", "Indicações de lojas parceiras quando falta uma peça no armário."],
  ["03", "Ganho para o varejo", "Compras com contexto geram menos trocas e devoluções."],
];

export function Plans() {
  return (
    <section id="planos" className="plans-section">
      <div className="plans-section__inner">
        <div className="plans-section__heading">
          <div>
            <span className="eyebrow">Modelo / Freemium / Afiliação</span>
            <ScrollReveal><h2 className="display-title">Comece grátis. Cresça com o seu <em>armário.</em></h2></ScrollReveal>
          </div>
          <p>O plano gratuito apresenta a HarmonIA. O Premium remove os limites para quem quer usar o armário inteiro.</p>
        </div>

        <div className="plans-grid">
          {PLANS.map(({ variant, tag, icon: Icon, big, unit, title, items }, i) => (
            <ScrollReveal key={tag} delay={i * 0.1}>
              <article className={`plan-card plan-card--${variant}`}>
                <div className="plan-card__top"><span>{tag}</span><Icon size={18} aria-hidden="true" /></div>
                <p className="plan-card__big">{big}<small>{unit}</small></p>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="plans-section__revenue">
          {REVENUE.map(([n, title, text]) => (
            <div key={n}><span>{n} / {title}</span><p>{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}