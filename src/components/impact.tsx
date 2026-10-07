import { Leaf, ScanSearch, Target } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const GOALS = [
  { n: "01", icon: ScanSearch, tag: "Meta técnica", title: "Visão computacional validada no MVP.", text: "Garantir assertividade na identificação das peças e nas recomendações de looks.", mark: "MVP" },
  { n: "02", icon: Leaf, tag: "Meta socioambiental", title: "Menos descarte. Menos carbono.", text: "Reduzir a pegada de carbono e o descarte de resíduos têxteis dos usuários, alinhado ao ODS 12 da ONU.", mark: "ODS 12" },
];

export function Impact() {
  return (
    <section id="impacto" className="impact-section">
      <div className="impact-section__inner">
        <div className="impact-section__heading">
          <div>
            <span className="eyebrow">Objetivo / Metas / Impacto</span>
            <ScrollReveal><h2 className="display-title">Ressignificar a relação com a <em>moda.</em></h2></ScrollReveal>
          </div>
          <p>Transformar compras impulsivas em decisões estratégicas e sustentáveis, usando mais do que já está no armário.</p>
        </div>

        <ScrollReveal>
          <div className="impact-usage">
            <div className="impact-usage__head"><span>Taxa de utilização do armário</span><Target size={16} aria-hidden="true" /></div>
            <div className="impact-usage__row"><span>Hoje</span><div><i className="impact-usage__today" /></div><b>30%</b></div>
            <div className="impact-usage__row"><span>Com a HarmonIA</span><div><i className="impact-usage__goal" /></div><b>+70%</b></div>
          </div>
        </ScrollReveal>

        <div className="impact-goals">
          {GOALS.map(({ n, icon: Icon, tag, title, text, mark }, i) => (
            <ScrollReveal key={n} delay={i * 0.1}>
              <article className="impact-goal">
                <div className="impact-goal__top"><span>{n} / {tag}</span><Icon size={18} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <strong className="impact-goal__mark">{mark}</strong>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="impact-section__foot"><span>ODS 12 / Consumo e produção responsáveis</span><span>Moda circular / Consumo consciente</span></div>
      </div>
    </section>
  );
}