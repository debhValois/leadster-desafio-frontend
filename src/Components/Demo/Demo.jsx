import Image from "next/image";
import styles from "./Demo.module.scss";

const Demo = () => {
  return (
    <section id="demo" className={styles.demo}>
      {/*CONTEÚDO DA ESQUERDA*/}

      <div className={styles.esquerda}>
        {/*Encontrar outra alternativa - essa sombra não atende a responsividade
        <Image
          src="/demo-background-element.png"
          alt="sombra"
          width={1920}
          height={732}
          className={styles.sombra}
        /> */}
        <Image
          src="/comparativo_img_CTA.png"
          alt="comparativo"
          width={600}
          height={500}
        />
      </div>

      {/*CONTEÚDO DA DIREITA*/}

      <div className={styles.direita}>
        <div className={styles.content}>
          <h2>Pronto para triplicar sua</h2>
          <h2>
            <strong>Geração de Leads?</strong>
          </h2>
          <br />
          <h3>
            Criação e ativação em <b>4 minutos</b>.
          </h3>

          <div className={styles.line} />
          <br />

          <div className={styles.content1}>
            <a href="#" className="btn btn-demo">
              <b>VER DEMONSTRAÇÃO</b>
            </a>

            <Image src="/selo_RD.png" alt="selo RD" width={168} height={60} />
          </div>
          <br />
          <div className={styles.content2}>
            <Image
              src="/no-card-dark.webp"
              alt="no card"
              width={21}
              height={21}
            />
            <p>
              <b>Não</b> é necessário cartão de crédito |{" "}
            </p>
            <Image src="/rating.webp" alt="stars" width={92} height={16} />
            <p>
              <b>4,9</b>/5 média de satisfação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
