import { FiArrowRight, FiClipboard, FiSearch, FiTrendingUp } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const featureCards = [
  {
    Icon: FiSearch,
    title: "Análise da presença digital",
    description: "Entenda como sua marca aparece e onde há potencial de aquisição.",
  },
  {
    Icon: FiTrendingUp,
    title: "Avaliação do funil comercial",
    description: "Identifique perdas entre leads, atendimento, proposta e venda.",
  },
  {
    Icon: FiClipboard,
    title: "Plano inicial de oportunidades",
    description: "Receba prioridades simples para evoluir com mais clareza.",
  },
];

const helpSteps = [
  {
    title: "Gargalos visíveis",
    description: "Mostra onde a operação perde crescimento hoje.",
  },
  {
    title: "Leitura integrada",
    description: "Conecta marketing, vendas e CRM em uma leitura única.",
  },
  {
    title: "Foco para agir",
    description: "Define oportunidades iniciais para agir com foco.",
  },
];

const ctaHref = "mailto:contato@seopartners.com.br?subject=Solicitar%20diagnostico%20gratuito";

export default function DiagnosticoGratuitoPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className="resources-page diagnosis-page">
        <section className="resources-hero container">
          <div className="resources-hero-copy">
            <span className="resources-badge">Recursos</span>
            <h1>Diagnóstico Gratuito</h1>
            <p>
              Receba uma análise inicial da sua operação de marketing, vendas e CRM
              para identificar oportunidades reais de crescimento.
            </p>
            <a className="resources-primary-cta" href={ctaHref}>
              Solicitar diagnóstico <FiArrowRight aria-hidden />
            </a>
          </div>

          <aside className="resources-visual-panel" aria-label="Painel do diagnóstico">
            <div className="diagnosis-panel-heading">
              <strong>Diagnóstico inicial de oportunidades</strong>
            </div>
            <div className="resources-panel-metrics diagnosis-panel-metrics">
              <div>
                <small>Oportunidades</small>
                <strong>15</strong>
              </div>
              <div>
                <small>CRM</small>
                <strong>68%</strong>
              </div>
              <div>
                <small>Funil</small>
                <strong>42%</strong>
              </div>
            </div>
            <div className="diagnosis-dashboard-body" aria-hidden>
              <div className="diagnosis-signal-list">
                <span>Áreas avaliadas</span>
                <div>
                  <small>Marketing e aquisição</small>
                  <i><b className="is-44" /></i>
                  <strong>44%</strong>
                </div>
                <div>
                  <small>Vendas e atendimento</small>
                  <i><b className="is-34" /></i>
                  <strong>34%</strong>
                </div>
                <div>
                  <small>CRM e automação</small>
                  <i><b className="is-22" /></i>
                  <strong>22%</strong>
                </div>
              </div>
              <div className="diagnosis-gauge">
                <span>68%</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="resources-cards diagnosis-benefits container" aria-label="Destaques">
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

        <section className="resources-help diagnosis-help container">
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

        <section className="resources-final-cta diagnosis-final-cta container">
          <div className="resources-cta-box">
            <div>
              <h2>Encontre os gargalos antes de aumentar o investimento.</h2>
            </div>
            <a className="resources-cta-action" href={ctaHref}>
              Solicitar diagnóstico gratuito <FiArrowRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
