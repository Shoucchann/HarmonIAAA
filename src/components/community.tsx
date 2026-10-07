import { ArrowUpRight, Bookmark, Search, Share2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const POSTS = [
  { user: "@marina", palette: "Outono quente", tone: "linear-gradient(160deg,#a65f46,#6e2a2a)" },
  { user: "@lucas", palette: "Inverno frio", tone: "linear-gradient(160deg,#3d4a5e,#121a2b)" },
  { user: "@bia", palette: "Primavera clara", tone: "linear-gradient(160deg,#d8b36a,#a98842)" },
  { user: "@joao", palette: "Verão suave", tone: "linear-gradient(160deg,#8a9466,#3d4a3a)" },
  { user: "@carol", palette: "Outono profundo", tone: "linear-gradient(160deg,#7b3b3f,#2b2119)" },
  { user: "@rafa", palette: "Neutros", tone: "linear-gradient(160deg,#b9a883,#5a5240)" },
];

const ITEMS = [
  { icon: Share2, title: "Publique seus looks", text: "Compartilhe as combinações montadas com o seu próprio armário." },
  { icon: Bookmark, title: "Salve inspirações", text: "Guarde ideias para todas as ocasiões, como um mural de estilo." },
  { icon: Search, title: "Encontre quem veste como você", text: "Busque pessoas com o mesmo tipo de corpo ou a mesma cartela de cores." },
];

export function Community() {
  return (
    <section id="comunidade" className="community-section torn-sheet">
      <div className="community-section__inner">
        <div className="community-section__heading">
          <div>
            <span className="eyebrow">Comunidade / Feed / Parceiros</span>
            <ScrollReveal><h2 className="display-title">Inspiração de quem veste como <em>você.</em></h2></ScrollReveal>
          </div>
          <p>Uma rede social dentro do app para publicar looks, salvar ideias e se conectar com quem pode te inspirar.</p>
        </div>

        <div className="community-grid">
          <ScrollReveal>
            <div className="community-feed">
              <div className="community-feed__head"><span>Feed / Inspirações</span><span>Para você</span></div>
              <div className="community-feed__filters"><span className="is-active">Mesmo tipo de corpo</span><span>Mesma cartela</span><span>Ocasião</span></div>
              <div className="community-feed__posts">
                {POSTS.map((p) => (
                  <div key={p.user} className="community-post" style={{ background: p.tone }}>
                    <Bookmark size={12} aria-hidden="true" />
                    <span><b>{p.user}</b>{p.palette}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div>
            <div className="community-list">
              {ITEMS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="community-item"><Icon size={18} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></div>
              ))}
            </div>
            <ScrollReveal delay={0.1}>
              <div className="community-gap">
                <span>Lacuna no armário</span>
                <strong>Falta uma peça para fechar seus looks.</strong>
                <p>A HarmonIA identifica o que falta e sugere produtos de lojas parceiras, levando você direto ao site da loja.</p>
                <div><span>C&amp;A <ArrowUpRight size={12} aria-hidden="true" /></span><span>Renner <ArrowUpRight size={12} aria-hidden="true" /></span></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}