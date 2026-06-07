import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import logoSeoPartners from "@/assets/img/seo-partners-logo.png";

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
          <Link href="/solucoes" className="nav-link-with-icon">
            Soluções <FiChevronDown aria-hidden />
          </Link>
          <Link href="/como-funciona">Como Funciona</Link>
          <Link href="#diferenciais">Diferenciais</Link>
          <Link href="/sobre">Sobre Nós</Link>
          <Link href="#recursos" className="nav-link-with-icon">
            Recursos <FiChevronDown aria-hidden />
          </Link>
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
              <Link href="/solucoes">Soluções</Link>
              <Link href="/como-funciona">Como Funciona</Link>
              <Link href="#diferenciais">Diferenciais</Link>
              <Link href="/sobre">Sobre Nós</Link>
              <Link href="#recursos">Recursos</Link>
              <Link href="/login" className="mobile-login">Entrar</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
