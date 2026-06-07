import Image from "next/image";
import { FiArrowRight, FiCalendar, FiChevronLeft, FiChevronRight, FiClock, FiCpu, FiPercent, FiPlay, FiSettings, FiShare2, FiShield, FiTarget } from "react-icons/fi";
import { TbChartBar, TbPresentationAnalytics, TbRocket, TbTargetArrow, TbTrophy } from "react-icons/tb";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import bannerHeroSeoPartners from "@/assets/img/banner-hero-seopartners.png";

export default function Home() {
  return (
    <div className="sp-root">
      <Navbar />

      <header className="sp-hero container">
        <div className="sp-hero-left">
          <div className="hero-eyebrow">AGÊNCIA DE GROWTH &amp; TECNOLOGIA</div>

          <h1 className="hero-title">
            <span className="hero-title-line">Não entregamos leads.</span>
            <br />
            Entregamos
            <br />
            <span className="accent">crescimento.</span>
          </h1>

          <p className="hero-sub">
            Somos parceiros estratégicos da sua empresa. Gerenciamos todo o
            marketing, as campanhas e o crescimento com tecnologia própria,
            dados em tempo real e um modelo de parceria que alinha nosso
            sucesso ao seu resultado.
          </p>

          <div className="hero-ctas">
            <a href="#" className="btn btn-primary btn-lg hero-primary-cta">
              Quero crescer com a SEO Partners <span aria-hidden>→</span>
            </a>
            <a href="#como-funciona" className="btn btn-outline-light btn-lg hero-secondary-cta">
              Como funciona <span className="play-icon" aria-hidden><FiPlay /></span>
            </a>
          </div>

          <div className="hero-trust mt-4">
            <div className="avatars" aria-hidden="true">
              {["Rafael", "Camila", "Lucas", "Marina", "Bruno"].map((name) => (
                <div
                  className="avatar"
                  key={name}
                  style={{
                    backgroundImage: `url(https://api.dicebear.com/9.x/personas/svg?seed=${name}&backgroundColor=facc15,f59e0b,fb923c)`,
                  }}
                />
              ))}
            </div>
            <div className="trust-copy">
              <div className="trust-stars" aria-label="5 estrelas">★★★★★</div>
              <div className="trust-count">+150 empresas cresceram conosco</div>
            </div>
          </div>
        </div>

        <div className="sp-hero-right">
          <Image
            src={bannerHeroSeoPartners}
            alt="Dashboard da SEO Partners"
            className="hero-banner-image"
            priority
          />
        </div>
      </header>
      <section className="logos-stripe container py-4" aria-label="Clientes atendidos">
        <div className="logos-marquee">
          <div className="logos-track">
            {[
              "ZANETTI CONSTRUÇÕES",
              "HARMONIA CLÍNICA",
              "CONQUISTA COLÉGIO",
              "LOGTECH SOLUTIONS",
              "NUTRIVIDA SUPLEMENTOS",
              "GRUPO LUMEN",
              "ÓTICAS VISÃO",
              "IRONFIT ACADEMIA",
            ].map((client) => (
              <div className="logo-item" key={client}>{client}</div>
            ))}
            {[
              "ZANETTI CONSTRUÇÕES",
              "HARMONIA CLÍNICA",
              "CONQUISTA COLÉGIO",
              "LOGTECH SOLUTIONS",
              "NUTRIVIDA SUPLEMENTOS",
              "GRUPO LUMEN",
              "ÓTICAS VISÃO",
              "IRONFIT ACADEMIA",
            ].map((client) => (
              <div className="logo-item" key={`${client}-duplicate`} aria-hidden="true">{client}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="sp-differentials container py-5">
        <div className="diff-inner">
          <div className="diff-left">
            <span className="diff-eyebrow">NOSSO DIFERENCIAL</span>
            <h3 className="section-title">
              Muito além de
              <br />
              marketing.
              <br />
              <span>Somos seus sócios
                <br />
                no crescimento.</span>
            </h3>
            <p>
              Unimos estratégia, tecnologia e execução para gerar resultados
              reais e sustentáveis para sua empresa.
            </p>
            <a href="#como-funciona" className="diff-cta">
              Conheça nossos diferenciais <FiArrowRight aria-hidden />
            </a>
          </div>

          <div className="diff-right">
            <div className="diff-grid">
              <div className="diff-card">
                <FiShare2 className="diff-icon" aria-hidden />
                <h4>Parceria Estratégica</h4>
                <p>Atuamos como sócios investidores no seu crescimento, com metas alinhadas ao seu faturamento.</p>
              </div>
              <div className="diff-card">
                <FiSettings className="diff-icon" aria-hidden />
                <h4>Gestão Completa</h4>
                <p>Cuidamos de todo o marketing: site, redes sociais, campanhas, conteúdo, automações e consultoria.</p>
              </div>
              <div className="diff-card">
                <FiCpu className="diff-icon" aria-hidden />
                <h4>Tecnologia Própria</h4>
                <p>Plataforma exclusiva com dados em tempo real, integração via API e relatórios inteligentes.</p>
              </div>
              <div className="diff-card">
                <FiShield className="diff-icon" aria-hidden />
                <h4>Transparência Total</h4>
                <p>Acompanhe cada investimento, campanha e resultado de forma clara e em tempo real.</p>
              </div>
              <div className="diff-card">
                <FiTarget className="diff-icon" aria-hidden />
                <h4>Resultados Reais</h4>
                <p>Foco em crescimento previsível, com metodologia validada e otimização contínua.</p>
              </div>
              <div className="diff-card">
                <FiPercent className="diff-icon" aria-hidden />
                <h4>Modelo de Crescimento</h4>
                <p>Recebemos uma porcentagem justa pelo crescimento que geramos para você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="sp-how container py-5">
        <div className="how-inner">
          <span className="how-eyebrow">COMO FUNCIONA</span>
          <h3 className="section-title light">
            Um sistema completo para
            <br />
            fazer sua empresa <span>crescer</span>
          </h3>

          <div className="how-steps">
            <div className="how-step">
              <div className="how-icon"><TbTargetArrow aria-hidden /></div>
              <strong>01</strong>
              <h4>Diagnóstico</h4>
              <p>Entendemos seu negócio, seus objetivos e seu potencial de crescimento.</p>
            </div>
            <div className="how-step">
              <div className="how-icon"><TbPresentationAnalytics aria-hidden /></div>
              <strong>02</strong>
              <h4>Estratégia</h4>
              <p>Criamos um plano personalizado com metas, canais e previsões.</p>
            </div>
            <div className="how-step">
              <div className="how-icon"><TbRocket aria-hidden /></div>
              <strong>03</strong>
              <h4>Execução</h4>
              <p>Nossa equipe executa todo o plano com tecnologia, dados e otimização.</p>
            </div>
            <div className="how-step">
              <div className="how-icon"><TbChartBar aria-hidden /></div>
              <strong>04</strong>
              <h4>Análise e Otimização</h4>
              <p>Monitoramos, analisamos e otimizamos continuamente para maximizar resultados.</p>
            </div>
            <div className="how-step">
              <div className="how-icon"><TbTrophy aria-hidden /></div>
              <strong>05</strong>
              <h4>Crescimento</h4>
              <p>Você cresce e nós crescemos junto como parceiros.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-results container py-5">
        <div className="results-inner">
          <div className="results-left">
            <span className="results-eyebrow">RESULTADOS QUE FALAM POR SI</span>
            <h3 className="section-title">
              Mais resultados.
              <br />
              Menos achismo.
            </h3>
            <p>
              Estratégia, execução e tecnologia trabalhando juntas para gerar
              crescimento real e previsível.
            </p>

            <div className="results-metrics">
              <div>
                <strong>+843%</strong>
                <span>Aumento de receita</span>
              </div>
              <div>
                <strong>-62%</strong>
                <span>Redução de CAC</span>
              </div>
              <div>
                <strong>5,72x</strong>
                <span>ROI médio</span>
              </div>
              <div>
                <strong>+150</strong>
                <span>Empresas atendidas</span>
              </div>
            </div>

            <a href="#" className="results-cta">
              Ver mais cases de sucesso <FiArrowRight aria-hidden />
            </a>
          </div>

          <div className="case-card">
            <div className="case-content">
              <span>CASE DE SUCESSO</span>
              <h4>Clínica Harmonize</h4>
              <p>
                Em 12 meses, transformamos o marketing da clínica em uma
                máquina de crescimento previsível.
              </p>

              <div className="case-stats">
                <div>
                  <strong>+843%</strong>
                  <small>Aumento de receita</small>
                </div>
                <div>
                  <strong>+312%</strong>
                  <small>Mais agendamentos</small>
                </div>
                <div>
                  <strong>5,21x</strong>
                  <small>ROI alcançado</small>
                </div>
              </div>

              <svg className="case-chart" viewBox="0 0 420 150" aria-hidden="true">
                <defs>
                  <linearGradient id="caseArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M12 122 C 38 96, 52 104, 72 78 S 108 70, 126 64 S 160 84, 184 70 S 226 78, 252 58 S 294 64, 318 40 S 358 48, 408 18 L408 142 L12 142 Z" fill="url(#caseArea)" />
                <path d="M12 122 C 38 96, 52 104, 72 78 S 108 70, 126 64 S 160 84, 184 70 S 226 78, 252 58 S 294 64, 318 40 S 358 48, 408 18" fill="none" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
                <circle cx="86" cy="74" r="6" fill="#7c3aed" />
                <circle cx="408" cy="18" r="8" fill="#f8f9fd" stroke="#7c3aed" strokeWidth="5" />
              </svg>
              <div className="case-months">
                <span>Jan</span><span>Mar</span><span>Mai</span><span>Jul</span><span>Set</span><span>Nov</span><span>Dez</span>
              </div>
            </div>

            <div className="case-visual" aria-label="Recepção da Clínica Harmonize">
              <div className="case-ceiling" />
              <div className="case-wall">
                <strong>HARMONIZE</strong>
                <span>CLÍNICA</span>
              </div>
              <div className="case-counter">
                <span>harmonize</span>
              </div>
              <div className="case-dots"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-testimonials container py-5">
        <div className="testimonials-inner">
          <span className="testimonials-eyebrow">PARCERIA QUE GERA CONFIANÇA</span>
          <h3 className="section-title">O que nossos parceiros dizem</h3>

          <button className="testimonial-control testimonial-prev" aria-label="Depoimento anterior">
            <FiChevronLeft aria-hidden />
          </button>
          <button className="testimonial-control testimonial-next" aria-label="Próximo depoimento">
            <FiChevronRight aria-hidden />
          </button>

          <div className="testimonials">
            <div className="test-card">
              <div className="quote-mark">“</div>
              <p>
                A SEO Partners não é apenas um fornecedor, é um verdadeiro
                parceiro do nosso crescimento. Os resultados superaram todas as
                expectativas.
              </p>
              <div className="author">
                <div className="author-avatar">RZ</div>
                <div>
                  <strong>Rafael Zanetti</strong>
                  <span>CEO - Zanetti Construtora</span>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote-mark">“</div>
              <p>
                Transparência, estratégia e execução impecável. Desde que
                começamos, nosso faturamento não para de crescer.
              </p>
              <div className="author">
                <div className="author-avatar">CM</div>
                <div>
                  <strong>Dra. Camila Mendes</strong>
                  <span>Harmonize Clínica</span>
                </div>
              </div>
            </div>
            <div className="test-card">
              <div className="quote-mark">“</div>
              <p>
                Eles entendem de dados, de gente e de negócio. É raro encontrar
                um parceiro tão comprometido com resultado.
              </p>
              <div className="author">
                <div className="author-avatar">LF</div>
                <div>
                  <strong>Lucas Ferreira</strong>
                  <span>CEO - Ironfit Academia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-box">
            <div className="cta-icon">
              <FiCalendar aria-hidden />
              <FiClock aria-hidden className="cta-clock" />
            </div>
            <div className="cta-copy">
              <h3>Pronto para transformar seus resultados?</h3>
              <p>
                Agende uma reunião estratégica gratuita e descubra como podemos
                acelerar o crescimento da sua empresa.
              </p>
            </div>
            <a className="cta-action" href="#">
              Agendar Reunião Gratuita <FiArrowRight aria-hidden />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}










