import { FiActivity, FiArrowRight, FiFilter, FiPercent } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const featureCards = [
  {
    Icon: FiPercent,
    title: "Calculadora de ROI",
    description: "Simule retorno esperado e entenda o impacto real do investimento.",
  },
  {
    Icon: FiFilter,
    title: "Diagnóstico de funil",
    description: "Mapeie perdas entre geração de demanda, atendimento e vendas.",
  },
  {
    Icon: FiActivity,
    title: "Análise de performance",
    description: "Compare indicadores e encontre oportunidades de melhoria.",
  },
];

const helpSteps = [
  {
    title: "Leitura simples",
    description: "Transforma métricas em leitura simples.",
  },
  {
    title: "Gargalos priorizados",
    description: "Prioriza gargalos com maior impacto comercial.",
  },
  {
    title: "Decisões melhores",
    description: "Apoia decisões sobre aquisição, CRM e vendas.",
  },
];

const ctaHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";

export default function FerramentasPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className="resources-page tools-page">
        <section className="resources-hero container">
          <div className="resources-hero-copy">
            <span className="resources-badge">Recursos</span>
            <h1>Ferramentas</h1>
            <p>
              Recursos para analisar métricas, entender gargalos e tomar decisões
              melhores sobre aquisição, vendas e crescimento.
            </p>
            <a className="resources-primary-cta" href={ctaHref}>
              Explorar ferramentas <FiArrowRight aria-hidden />
            </a>
          </div>

          <aside className="resources-visual-panel" aria-label="Painel de ferramentas">
            <div className="tools-panel-heading">
              <strong>Ferramentas para decisões de crescimento</strong>
            </div>
            <div className="resources-panel-metrics tools-panel-metrics">
              <div>
                <small>Performance</small>
                <strong>91%</strong>
              </div>
              <div>
                <small>ROI</small>
                <strong>3.2x</strong>
              </div>
              <div>
                <small>Funil</small>
                <strong>+27%</strong>
              </div>
            </div>
            <div className="tools-dashboard-body" aria-hidden>
              <div className="tools-meter-list">
                <span>Análises mais usadas</span>
                <div>
                  <small>Funil e investimento</small>
                  <i><b className="is-48" /></i>
                  <strong>48%</strong>
                </div>
                <div>
                  <small>ROI por canal</small>
                  <i><b className="is-34" /></i>
                  <strong>34%</strong>
                </div>
                <div>
                  <small>Performance comercial</small>
                  <i><b className="is-18" /></i>
                  <strong>18%</strong>
                </div>
              </div>
              <div className="tools-gauge">
                <span>91%</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="resources-cards tools-benefits container" aria-label="Destaques">
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

        <section className="resources-help tools-help container">
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

        <section className="resources-final-cta tools-final-cta container">
          <div className="resources-cta-box">
            <div>
              <h2>Transforme métricas soltas em decisões de crescimento.</h2>
            </div>
            <a className="resources-cta-action" href={ctaHref}>
              Explorar ferramentas <FiArrowRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
