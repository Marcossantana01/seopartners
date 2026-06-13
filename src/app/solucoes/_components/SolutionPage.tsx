import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import bannerAutomacao from "@/assets/img/banner-hero-seopartners-automacao.png";
import bannerBusinessIntelligence from "@/assets/img/banner-hero-seopartners-business-intelligence.png";
import bannerCrmVendas from "@/assets/img/banner-hero-seopartners-crm-vendas.png";
import bannerGrowthPartnership from "@/assets/img/banner-hero-seopartners-growth-partnership.png";
import bannerLandingPages from "@/assets/img/banner-hero-seopartners-landing-pages.png";
import bannerMetaAds from "@/assets/img/banner-hero-seopartners-meta-ads.png";
import seoHeroDashboard from "@/assets/img/banner-hero-seopartners-crm.png";
import type { SolutionContent } from "./solutionContent";

type SolutionPageProps = {
  solution: SolutionContent;
};

const scheduleHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";

function SolutionList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function SolutionPage({ solution }: SolutionPageProps) {
  const isAutomacao = solution.slug === "automacao";
  const isBusinessIntelligence = solution.slug === "business-intelligence";
  const isCrmVendas = solution.slug === "crm-vendas";
  const isGrowth = solution.slug === "growth-partnership";
  const isLandingPages = solution.slug === "landing-pages";
  const isMetaAds = solution.slug === "meta-ads";
  const isSeo = solution.slug === "seo";

  return (
    <div className={`sp-root ${isSeo ? "seo-solution-root" : ""}`}>
      <Navbar />

      <main className={`solution-page ${isGrowth ? "solution-page-growth" : ""}`}>
        <section className={`solution-hero container ${isSeo ? "solution-seo-hero" : ""} ${isMetaAds ? "solution-meta-hero" : ""} ${isLandingPages ? "solution-landing-hero" : ""} ${isCrmVendas ? "solution-crm-hero" : ""} ${isAutomacao ? "solution-automacao-hero" : ""} ${isBusinessIntelligence ? "solution-bi-hero" : ""} ${isGrowth ? "solution-growth-hero" : ""}`}>
          <div className="solution-hero-copy">
            <span className="hero-eyebrow">{solution.eyebrow}</span>

            {isSeo ? (
              <h1 className="hero-title">
                SEO que transforma
                <br />
                buscas em
                <br />
                <span className="accent">oportunidades de venda.</span>
              </h1>
            ) : (
              <h1 className="hero-title">{solution.title}</h1>
            )}

            <p className="hero-sub">{solution.subtitle}</p>

            <div className="solution-hero-actions">
              <a href={scheduleHref} className="btn btn-primary btn-lg hero-primary-cta">
                Agendar Reunião <FiArrowRight aria-hidden />
              </a>

              {isSeo ? (
                <a href={scheduleHref} className="btn btn-outline-light btn-lg hero-secondary-cta">
                  Falar com Especialista
                </a>
              ) : null}
            </div>

            {isSeo ? (
              <>
                <div className="seo-hero-points" aria-label="Benefícios principais">
                  <span>Mais tráfego qualificado</span>
                  <span>Crescimento sustentável</span>
                  <span>Estratégia orientada por dados</span>
                </div>

                <div className="seo-hero-trust">
                  <small>EMPRESAS QUE CONFIAM NA SEO PARTNERS</small>
                  <div>
                    <span>NUTRIVIDA</span>
                    <span>GRUPO LUMEN</span>
                    <span>ÓTICAS VISÃO</span>
                    <span>IRONFIT</span>
                    <span>ZANETTI</span>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          {isSeo ? (
            <div className="solution-hero-visual">
              <div className="seo-dashboard-card">
                <Image
                  src={seoHeroDashboard}
                  alt="Dashboard de SEO com métricas de tráfego orgânico"
                  className="solution-hero-image"
                  priority
                />
              </div>
            </div>
          ) : null}

          {isMetaAds ? (
            <div className="solution-hero-visual">
              <Image
                src={bannerMetaAds}
                alt="Dashboard Meta Ads"
                className="solution-hero-image solution-meta-hero-image"
                priority
              />
            </div>
          ) : null}

          {isLandingPages ? (
            <div className="solution-hero-visual">
              <Image
                src={bannerLandingPages}
                alt="Dashboard CRM para Landing Pages"
                className="solution-hero-image solution-landing-hero-image"
                priority
              />
            </div>
          ) : null}

          {isCrmVendas ? (
            <div className="solution-hero-visual">
              <Image
                src={bannerCrmVendas}
                alt="Dashboard CRM Comercial"
                className="solution-hero-image solution-crm-hero-image"
                priority
              />
            </div>
          ) : null}

          {isAutomacao ? (
            <div className="solution-hero-visual">
              <Image
                src={bannerAutomacao}
                alt="Dashboard de automação de marketing e vendas"
                className="solution-hero-image solution-automacao-hero-image"
                priority
              />
            </div>
          ) : null}

          {isBusinessIntelligence ? (
            <div className="solution-hero-visual">
              <Image
                src={bannerBusinessIntelligence}
                alt="Dashboard de Business Intelligence"
                className="solution-hero-image solution-bi-hero-image"
                priority
              />
            </div>
          ) : null}

          {isGrowth ? (
            <div className="solution-hero-visual">
              <Image
                src={bannerGrowthPartnership}
                alt="Ecossistema integrado de crescimento da SEO Partners"
                className="solution-hero-image solution-growth-hero-image"
                priority
              />
            </div>
          ) : null}
        </section>

        <section className="solution-sections container" aria-label="Detalhes da solução">
          <article className="solution-section">
            <span>01</span>
            <h2>Problemas que resolvemos</h2>
            <SolutionList items={solution.problems} />
          </article>

          <article className="solution-section">
            <span>02</span>
            <h2>Como funciona</h2>
            <SolutionList items={solution.process} />
          </article>

          <article className="solution-section">
            <span>03</span>
            <h2>Benefícios</h2>
            <SolutionList items={solution.benefits} />
          </article>

          <article className="solution-section">
            <span>04</span>
            <h2>Resultados esperados</h2>
            <SolutionList items={solution.results} />
          </article>
        </section>

        {isGrowth ? (
          <section className="growth-stack container" aria-label="Frentes da parceria">
            {[
              "Marketing",
              "Vendas",
              "CRM",
              "Automação",
              "Business Intelligence",
              "Consultoria Estratégica",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </section>
        ) : null}

        <section className="solution-final-cta container">
          <div className="cta-box">
            <div className="cta-copy">
              <h3>Pronto para transformar essa solução em crescimento?</h3>
              <p>
                Agende uma conversa estratégica para entender os próximos passos
                mais importantes para a sua empresa.
              </p>
            </div>
            <a className="cta-action" href={scheduleHref}>
              Agendar Reunião <FiArrowRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
