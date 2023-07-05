import Logo from "@/UI/Logo";
import styles from "./Filter.module.scss";
import { useState } from "react";

const links = [
  { url: "#", text: "Agências" },
  { url: "#", text: "Chatbot" },
  { url: "#", text: "Marketing Digital" },
  { url: "#", text: "Geração de Leads" },
  { url: "#", text: "Mídia Paga" },
  { url: "#", text: "Data de Publicação" },
];
const Filter = () => {
  const [isMobile, setIsMobile] = useState(false);

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.text}</a>
    </li>
  ));

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);
  return (
    <section className="btn btn-demo" className={styles.navbar}>
      <div className={styles.desktop}>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(0, 4)}</ul>
        </nav>

        <div>
          <h3>
            <b>Ordenar por</b>
          </h3>
        </div>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(5, 6)}</ul>
        </nav>
      </div>

      <br />

      <div className={styles.navbar}>

      <div className={styles.line} />
      </div>
      
    
    </section>
  );
};

export default Filter;
