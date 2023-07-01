import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href='#soluctions' className='btn btn-header'>
          WEBNARS  EXCLUSIVOS
        </a>
        <br/>
        <br/>
        <h2>Menos Conversinha,</h2>
        <h1><strong>Mais Conversão</strong> 
        <Image
        src='/asset-header.png'
        alt='detalhe'
        width={49}
        height={32}
        className={styles.detail1}
      />
        </h1>
        <div className={styles.line} />
        <p className='dark-bg'>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio
        </p>
      </div>
    </header>
  );
};

export default Header;
