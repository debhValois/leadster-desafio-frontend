import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href='#products' className='btn btn-primary'>
          WEBNARS EXCLUSIVOS
        </a>
        <br/>
        <br/>
        <h2>Menos conversinha,</h2>
        <h1>Mais Conversão</h1>
        <div className={styles.line} />
        <p className='dark-bg'>
          Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio
        </p>
      </div>
    </header>
  );
};

export default Header;