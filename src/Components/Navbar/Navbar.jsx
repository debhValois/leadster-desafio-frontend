import Logo from "@/UI/Logo";
import styles from "./Navbar.module.scss";
import { useState } from "react";

const links = [
  { url: "#soluctions", text: "Soluções" },
  { url: "#demo", text: "Demonstração" },
  { url: "#", text: "Conteúdo" },
  { url: "#footer", text: "Contato" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.text}</a>
    </li>
  ));

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);
  return (
    <section className={styles.navbar}>
      <div className={styles.desktop}>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(0, 2)}</ul>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(2, 4)}</ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
