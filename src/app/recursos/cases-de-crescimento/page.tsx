import { FiArrowRight, FiBarChart2, FiTarget, FiUsers } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const featureCards = [
  {
    Icon: FiBarChart2,
    title: "Crescimento em receita",
    description: "Estratégias que conectam marketing, vendas e CRM para gerar mais receita, com previsibilidade.",
  },
  {
    Icon: FiTarget,
    title: "Mais previsibilidade comercial",
    description: "Processos, automações e dados integrados para previsibilidade e escala de resultados.",
  },
  {
    Icon: FiUsers,
    title: "Operação integrada de marketing e vendas",
    description: "Times alinhados, funis eficientes e sistemas integrados para máxima performance.",
  },
];

const helpSteps = [
  {
    title: "Diagnóstico completo",
    description: "Analisamos sua operação, gargalos e oportunidades reais de crescimento.",
  },
  {
    title: "Estratégia personalizada",
    description: "Criamos um plano alinhado com seu objetivo, mercado e potencial de crescimento.",
  },
  {
    title: "Execução e crescimento",
    description: "Implementamos, otimizamos e escalamos para gerar resultados consistentes.",
  },
];

const ctaHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";

export default function CasesDeCrescimentoPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className="resources-page cases-growth-page">
        <section className="resources-hero container">
          <div className="resources-hero-copy">
            <span className="resources-badge">Recursos</span>
            <h1>Cases de Crescimento</h1>
            <p>
              Veja como a SEO Partners ajuda empresas a transformar marketing,
              vendas, CRM e automação em crescimento real e mensurável.
            </p>
            <a className="resources-primary-cta" href={ctaHref}>
              Quero construir um case <FiArrowRight aria-hidden />
            </a>
          </div>

          <aside className="resources-visual-panel" aria-label="Painel de crescimento">
            <div className="cases-results-heading">
              <strong>Resultados que geram crescimento</strong>
            </div>
            <div className="resources-panel-metrics cases-results-metrics">
              <div>
                <small>Receita Gerada</small>
                <strong>R$ 4.750.000</strong>
              </div>
              <div>
                <small>Novos</small>
                <strong className="is-positive">+41%</strong>
              </div>
              <div>
                <small>Empresas Clientes</small>
                <strong>2.650</strong>
              </div>
              <div>
                <small>ROI Médio</small>
                <strong>3.8x</strong>
              </div>
            </div>
            <div className="cases-line-chart" aria-hidden>
              <span>Crescimento acumulado</span>
              <svg viewBox="0 0 520 190" role="img">
                <defs>
                  <linearGradient id="casesGrowthArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.42" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="cases-chart-grid" d="M32 40H496M32 82H496M32 124H496M32 166H496" />
                <path className="cases-chart-area" d="M34 146C62 132 78 130 102 118C127 106 144 120 170 106C195 92 213 96 236 88C265 78 286 86 312 70C338 55 360 62 386 48C412 34 431 38 454 22C474 9 488 12 500 7V170H34Z" />
                <path className="cases-chart-line" d="M34 146C62 132 78 130 102 118C127 106 144 120 170 106C195 92 213 96 236 88C265 78 286 86 312 70C338 55 360 62 386 48C412 34 431 38 454 22C474 9 488 12 500 7" />
              </svg>
              <div className="cases-chart-months">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="resources-cards cases-benefits container" aria-label="Destaques">
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

        <section className="resources-help cases-help container">
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

        <section className="resources-final-cta cases-final-cta container">
          <div className="resources-cta-box">
            <div>
              <h2>Pronto para ser o próximo case de crescimento?</h2>
            </div>
            <a className="resources-cta-action" href={ctaHref}>
              Quero construir um case de crescimento <FiArrowRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
