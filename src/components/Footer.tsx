import Image from "next/image";
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
          <a href="/solucoes">Soluções</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="/sobre">Sobre Nós</a>
        </div>

        <div className="footer-col">
          <h6>Soluções</h6>
          <a href="#">Tráfego Pago</a>
          <a href="#">SEO</a>
          <a href="#">Redes Sociais</a>
          <a href="#">Automação</a>
        </div>

        <div className="footer-col">
          <h6>Empresa</h6>
          <a href="/sobre">Sobre Nós</a>
          <a href="#">Cases</a>
          <a href="#">Blog</a>
          <a href="/contato">Contato</a>
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
