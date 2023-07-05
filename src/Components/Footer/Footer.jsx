import Logo from "@/UI/Logo";
import SocialLinks from "@/UI/SocialLinks";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rowLogo}>
        <h1>
          <Logo />
        </h1>
        <span>Transformando visitantes em clientes.</span>
      </div>
      <div className={styles.content}>
        <div className={styles.columns}>
          <h3>Links Principais</h3>
          <ul>
            <li>Home</li>
            <li>Ferramenta</li>
            <li>Preços</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className={styles.columns}>
          <h3>Cases</h3>
          <ul>
            <li>Geração de Leads B2B</li>
            <li>Geração de Leads em Software</li>
            <li>Geração de Leads em Imobiliária</li>
            <li>Cases de Sucesso</li>
          </ul>
        </div>
        <div className={styles.columns}>
          <h3>Materiais</h3>
          <ul>
            <li>Blog</li>
            <li>Parcerias com Agências</li>
            <li>Guia Definitivo do Marketing</li>
            <li>Materiais Gratuitos</li>
          </ul>
        </div>
        <div className={styles.columns}>
          <h3>Siga a Leadster</h3>
          <SocialLinks />
          <ul>
            <p>
              <b>E-mail:</b> contato@leadster.com.br
            </p>
            <p>
              <b>Telefone:</b> (42) 98828-9851
            </p>
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <span>
          Copyright© 2015 - 2022 Todos os direitos reservados |
          <a href="#">
            {" "}
            <b>Leadster</b>
          </a>
        </span>
        <span>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          <a href="#"> Termos de Uso</a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;