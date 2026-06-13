import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import googleAdsHeroImage from "@/assets/img/banner-hero-seopartners-google-ads.png";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { solutions } from "../_components/solutionContent";
import styles from "./GoogleAdsPage.module.css";

const scheduleHref = "mailto:contato@seopartners.com.br?subject=Agendar%20Reuniao";
const solution = solutions["google-ads"];
function SolutionList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function GoogleAdsPage() {
  return (
    <div className="sp-root">
      <Navbar />

      <main className={styles.page}>
        <section className={`${styles.hero} container`}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>{solution.eyebrow}</span>

            <h1 className={styles.title}>
              Google Ads com
              <br />
              foco em <span>receita,</span>
              <br />
              não em <span>cliques.</span>
            </h1>

            <p className={styles.subtitle}>
              Criamos campanhas estratégicas que colocam sua empresa no topo do
              Google e transformam buscas em clientes e resultados reais.
            </p>

            <div className={styles.actions}>
              <a href={scheduleHref} className="btn btn-primary">
                Agendar Reunião <FiArrowRight aria-hidden />
              </a>
              <a href={scheduleHref} className="btn btn-outline-light">
                Falar com Especialista
              </a>
            </div>
          </div>

          <div className={styles.visual} aria-label="Ecossistema Google Ads">
            <Image
              src={googleAdsHeroImage}
              alt="Ecossistema Google Ads"
              className={styles.heroImage}
              priority
            />
          </div>

          <div className={styles.benefitBar} aria-label="Benefícios principais">
            <span>Tráfego Qualificado</span>
            <span>Mais Conversões</span>
            <span>Melhor ROI</span>
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
