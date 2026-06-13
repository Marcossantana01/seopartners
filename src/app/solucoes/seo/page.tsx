import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import seoHeroDashboard from "@/assets/img/banner-hero-seopartners-crm.png";
import { solutions } from "../_components/solutionContent";
import styles from "./SeoPage.module.css";

const scheduleHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";
const solution = solutions.seo;

function SolutionList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function SeoPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className={styles.page}>
        <section className={`${styles.hero} container`}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>{solution.eyebrow}</span>

            <h1 className={styles.title}>
              SEO que transforma
              <br />
              buscas em
              <br />
              <span>oportunidades de venda.</span>
            </h1>

            <p className={styles.subtitle}>{solution.subtitle}</p>

            <div className={styles.actions}>
              <a href={scheduleHref} className="btn btn-primary">
                Agendar Reunião <FiArrowRight aria-hidden />
              </a>
              <a href={scheduleHref} className="btn btn-outline-light">
                Falar com Especialista
              </a>
            </div>

            <div className={styles.benefits} aria-label="Benefícios principais">
              <span>Mais tráfego qualificado</span>
              <span>Crescimento sustentável</span>
              <span>Estratégia orientada por dados</span>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.dashboardCard}>
              <Image
                src={seoHeroDashboard}
                alt=""
                className={styles.dashboardImage}
                priority
              />
            </div>
          </div>
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
