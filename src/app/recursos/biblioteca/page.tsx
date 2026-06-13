import { FiArrowRight, FiBookOpen, FiCheckSquare, FiFileText } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const featureCards = [
  {
    Icon: FiBookOpen,
    title: "Guias práticos",
    description: "Materiais diretos para melhorar processos sem complexidade desnecessária.",
  },
  {
    Icon: FiCheckSquare,
    title: "Checklists operacionais",
    description: "Listas objetivas para revisar campanhas, CRM, funil e rotina comercial.",
  },
  {
    Icon: FiFileText,
    title: "Templates de crescimento",
    description: "Modelos para acelerar decisões e organizar as próximas ações.",
  },
];

const helpSteps = [
  {
    title: "Processos padronizados",
    description: "Padroniza processos que antes ficavam soltos.",
  },
  {
    title: "Menos retrabalho",
    description: "Reduz retrabalho entre marketing e vendas.",
  },
  {
    title: "Operação evolutiva",
    description: "Cria uma base simples para evoluir a operação.",
  },
];

const ctaHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";

export default function BibliotecaPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className="resources-page library-page">
        <section className="resources-hero container">
          <div className="resources-hero-copy">
            <span className="resources-badge">Recursos</span>
            <h1>Biblioteca</h1>
            <p>
              Materiais, guias, checklists e conteúdos práticos para melhorar sua
              operação de marketing, vendas e gestão comercial.
            </p>
            <a className="resources-primary-cta" href={ctaHref}>
              Acessar materiais <FiArrowRight aria-hidden />
            </a>
          </div>

          <aside className="resources-visual-panel" aria-label="Painel da biblioteca">
            <div className="library-panel-heading">
              <strong>Materiais para acelerar a operação</strong>
            </div>
            <div className="resources-panel-metrics library-panel-metrics">
              <div>
                <small>Biblioteca ativa</small>
                <strong>24</strong>
              </div>
              <div>
                <small>Guias</small>
                <strong>8</strong>
              </div>
              <div>
                <small>Templates</small>
                <strong>16</strong>
              </div>
            </div>
            <div className="library-dashboard-body" aria-hidden>
              <div className="library-material-list">
                <span>Materiais mais usados</span>
                <div>
                  <small>Checklist de funil comercial</small>
                  <i><b className="is-52" /></i>
                  <strong>52%</strong>
                </div>
                <div>
                  <small>Template de campanha</small>
                  <i><b className="is-31" /></i>
                  <strong>31%</strong>
                </div>
                <div>
                  <small>Guia de rotina comercial</small>
                  <i><b className="is-17" /></i>
                  <strong>17%</strong>
                </div>
              </div>
              <div className="library-stack">
                <span />
                <span />
                <span />
              </div>
            </div>
          </aside>
        </section>

        <section className="resources-cards library-benefits container" aria-label="Destaques">
          <div className="row g-3">
            {featureCards.map((card) => (
              <div className="col-12 col-md-4" key={card.title}>
                <article className="resources-card">
                  <span className="resources-card-icon" aria-hidden>
                    <card.Icon />
                  </span>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="resources-help library-help container">
          <h2 className="resources-section-kicker">Como isso ajuda sua empresa</h2>
          <div className="row g-3">
            {helpSteps.map((step, index) => (
              <div className="col-12 col-lg-4" key={step.title}>
                <article className="resources-help-card">
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <div>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="resources-final-cta library-final-cta container">
          <div className="resources-cta-box">
            <div>
              <h2>Use materiais práticos para organizar o crescimento.</h2>
            </div>
            <a className="resources-cta-action" href={ctaHref}>
              Acessar materiais gratuitos <FiArrowRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
