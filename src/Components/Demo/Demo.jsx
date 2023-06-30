import Image from 'next/image';
import styles from './Demo.module.scss';

const Demo = () => {
  return (
    <section id='demo' className={styles.demo}>
      <Image src='/comparativo_img_CTA.png' alt='comparativo' width={600} height={500} />
      <div className={styles.content}>
        <h2 className='title light-bg'>Pronto para triplicar sua</h2>
        <h1 className='title light-bg'>Geração de Leads?</h1>
        <p>
          Criação e ativação em 4 minutos.
        </p>
        <div className={styles.line} />
        <p>
          Não é necessário cartão de crédito.
        </p>
      </div>
    </section>
  );
};

export default Demo;
