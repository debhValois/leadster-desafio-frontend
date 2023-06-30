import Stars from '@/UI/Stars';
import Image from 'next/image';
import styles from './Soluction.module.scss';

const Soluction = ({ soluction, title, roast, stars, price }) => {
  return (
    
    <div className={styles.soluction}>
      <Image
        /* src={`/soluction${soluction}.png`} SUBSTITUIR A PRÓX LINHA QUANDO CADA CARD FOR 1 PRODUTO DIFERENTE */
        src={`/soluction.png`}
        alt={`solução ${soluction}`}
        width={362}
        height={204}
      />

      <div className={styles.infoCard}>
        <h2>{title}</h2>
        <h3>{roast}</h3>
        <Stars stars={stars} />
        <h4>R$ {price}</h4>
      </div>

    </div>
  );
};

export default Soluction;
