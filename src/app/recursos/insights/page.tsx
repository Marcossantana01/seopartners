import { FiArrowRight, FiBarChart2, FiCpu, FiTarget } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const featureCards = [
  {
    Icon: FiBarChart2,
    title: "Estratégias de aquisição",
    description: "Ideias para atrair demanda qualificada sem desperdiçar investimento.",
  },
  {
    Icon: FiTarget,
    title: "Inteligência de vendas",
    description: "Leituras práticas para melhorar abordagem, pipeline e conversão.",
  },
  {
    Icon: FiCpu,
    title: "Automação e performance",
    description: "Conteúdos sobre fluxos, dados e rotinas mais eficientes.",
  },
];

const helpSteps = [
  {
    title: "Prioridades claras",
    description: "Organiza prioridades antes de novas campanhas.",
  },
  {
    title: "Decisões comerciais",
    description: "Ajuda times a ler dados com foco comercial.",
  },
  {
    title: "Crescimento conectado",
    description: "Conecta tecnologia, aquisição e crescimento.",
  },
];

const ctaHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";

export default function InsightsPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className="resources-page insights-page">
        <section className="resources-hero container">
          <div className="resources-hero-copy">
            <span className="resources-badge">Recursos</span>
            <h1>Insights</h1>
            <p>
              Conteúdos estratégicos sobre SEO, tráfego pago, automação, CRM,
              inteligência artificial e crescimento empresarial.
            </p>
            <a className="resources-primary-cta" href={ctaHref}>
              Receber insights <FiArrowRight aria-hidden />
            </a>
          </div>

          <aside className="resources-visual-panel" aria-label="Painel de insights">
            <div className="insights-panel-heading">
              <strong>Insights que impulsionam decisões</strong>
            </div>
            <div className="resources-panel-metrics insights-panel-metrics">
              <div>
                <small>Artigos Publicados</small>
                <strong>128</strong>
              </div>
              <div>
                <small>Leituras</small>
                <strong>24.560 <span>+35%</span></strong>
              </div>
              <div>
                <small>Downloads</small>
                <strong>8.420 <span>+20%</span></strong>
              </div>
            </div>
            <div className="insights-dashboard-body" aria-hidden>
              <div className="insights-topic-list">
                <span>Temas mais acessados</span>
                <div>
                  <small>Estratégia de aquisição</small>
                  <i><b className="is-45" /></i>
                  <strong>45%</strong>
                </div>
                <div>
                  <small>Inteligência de vendas</small>
                  <i><b className="is-30" /></i>
                  <strong>30%</strong>
                </div>
                <div>
                  <small>Automação e performance</small>
                  <i><b className="is-25" /></i>
                  <strong>25%</strong>
                </div>
              </div>
              <div className="insights-donut">
                <span />
              </div>
            </div>
          </aside>
        </section>

        <section className="resources-cards insights-benefits container" aria-label="Destaques">
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

        <section className="resources-help insights-help container">
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

        <section className="resources-final-cta insights-final-cta container">
          <div className="resources-cta-box">
            <div>
              <h2>Receba decisões melhores antes de investir mais.</h2>
            </div>
            <a className="resources-cta-action" href={ctaHref}>
              Quero receber insights estratégicos <FiArrowRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
