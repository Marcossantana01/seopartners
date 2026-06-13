import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import logoSeoPartners from "@/assets/img/seo-partners-logo.png";

const solutionLinks = [
  { href: "/solucoes/seo", label: "SEO" },
  { href: "/solucoes/google-ads", label: "Google Ads" },
  { href: "/solucoes/meta-ads", label: "Meta Ads" },
  { href: "/solucoes/landing-pages", label: "Landing Pages" },
  { href: "/solucoes/crm-vendas", label: "CRM Comercial" },
  { href: "/solucoes/automacao", label: "Automação" },
  { href: "/solucoes/business-intelligence", label: "BI & Relatórios" },
  { href: "/solucoes/growth-partnership", label: "Growth Partnership" },
];

const resourceLinks = [
  { href: "/recursos/cases-de-crescimento", label: "Cases de Crescimento" },
  { href: "/recursos/insights", label: "Insights" },
  { href: "/recursos/biblioteca", label: "Biblioteca" },
  { href: "/recursos/ferramentas", label: "Ferramentas" },
  { href: "/diagnostico-gratuito", label: "Diagnóstico Gratuito" },
];

export function Navbar() {
  return (
    <header className="sp-navbar">
      <div className="container nav-container">
        <Link href="/" className="brand" aria-label="SEO Partners">
          <Image
            src={logoSeoPartners}
            alt="SEO Partners"
            className="navbar-logo"
            priority
          />
        </Link>

        <nav className="sp-navlinks d-none d-lg-flex" aria-label="Menu principal">
          <div className="nav-dropdown">
            <button className="nav-link-with-icon nav-dropdown-trigger" type="button">
              Soluções <FiChevronDown aria-hidden />
            </button>
            <div className="nav-dropdown-menu" aria-label="Soluções">
              {solutionLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/como-funciona">Como Funciona</Link>
          <Link href="#diferenciais">Diferenciais</Link>
          <Link href="/sobre">Sobre Nós</Link>
          <div className="nav-dropdown">
            <button className="nav-link-with-icon nav-dropdown-trigger" type="button">
              Recursos <FiChevronDown aria-hidden />
            </button>
            <div className="nav-dropdown-menu" aria-label="Recursos">
              {resourceLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="sp-cta-buttons d-none d-lg-flex align-items-center">
          <Link href="/login" className="btn btn-outline-dark-custom">
            Entrar
          </Link>
          <a href="#" className="btn btn-primary">
            Agendar Reunião
          </a>
        </div>

        <div className="d-lg-none mobile-actions">
          <a href="#" className="btn btn-primary btn-sm mobile-schedule">
            Agendar
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <FiMenu aria-hidden />
            </summary>
            <nav aria-label="Menu mobile">
              <span className="mobile-menu-label">Soluções</span>
              {solutionLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/como-funciona">Como Funciona</Link>
              <Link href="#diferenciais">Diferenciais</Link>
              <Link href="/sobre">Sobre Nós</Link>
              <span className="mobile-menu-label">Recursos</span>
              {resourceLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="mobile-login">Entrar</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
