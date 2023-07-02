import styles from './SocialLinks.module.scss';
import { RiLinkedinFill, RiFacebookFill, RiInstagramLine } from 'react-icons/ri';

const socialLinks = [
  { url: 'https://www.linkedin.com/company/getleadster/', component: <RiLinkedinFill /> },
  { url: 'https://www.facebook.com/leadsterplatform', component: <RiFacebookFill /> },
  { url: 'https://www.instagram.com/leadster.com.br/', component: <RiInstagramLine /> },
];

const SocialLinks = () => {
  const renderLinks = socialLinks.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.component}</a>
    </li>
  ));
  return <ul className={styles.media}>{renderLinks}</ul>;
};

export default SocialLinks;
