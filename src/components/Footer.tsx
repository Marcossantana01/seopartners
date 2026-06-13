import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import logoSeoPartners from "@/assets/img/seo-partners-logo.png";

export function Footer() {
  return (
    <footer className="sp-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src={logoSeoPartners} alt="SEO Partners" className="footer-logo" />
          <p>
            Somos parceiros estratégicos que impulsionam o crescimento da sua
            empresa com marketing, tecnologia e dados.
          </p>
        </div>

        <div className="footer-col">
          <h6>Navegação</h6>
          <Link href="/solucoes">Soluções</Link>
          <Link href="/como-funciona">Como Funciona</Link>
          <Link href="#diferenciais">Diferenciais</Link>
          <Link href="/sobre">Sobre Nós</Link>
        </div>

        <div className="footer-col">
          <h6>Soluções</h6>
          <Link href="/solucoes/google-ads">Google Ads</Link>
          <Link href="/solucoes/meta-ads">Meta Ads</Link>
          <Link href="/solucoes/seo">SEO</Link>
          <Link href="/solucoes/automacao">Automação</Link>
        </div>

        <div className="footer-col">
          <h6>Empresa</h6>
          <Link href="/sobre">Sobre Nós</Link>
          <Link href="#cases">Cases</Link>
          <Link href="#blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </div>

        <div className="footer-col footer-contact">
          <h6>Contato</h6>
          <span><FiPhone aria-hidden /> (11) 99999-9999</span>
          <span><FiMail aria-hidden /> contato@seopartners.com.br</span>
          <span><FiMapPin aria-hidden /> Av. Paulista, 1000 - São Paulo, SP</span>
        </div>
      </div>
    </footer>
  );
}
