import styles from "./Filter.module.scss";
import DropdownList from "@/UI/DropdownList";
import { useState } from "react";

const links = [
  { url: "#", text: "Agências" },
  { url: "#", text: "Chatbot" },
  { url: "#", text: "Marketing Digital" },
  { url: "#", text: "Geração de Leads" },
  { url: "#", text: "Mídia Paga" },
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
          <ul>{renderLinks.slice(0, 5)}</ul>
        </nav>
        <DropdownList />
      </div>

      <br />

      <div className={styles.navbar}>
        <div className={styles.line} />
      </div>
    </section>
  );
};

export default Filter;
