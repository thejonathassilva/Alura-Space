import styles from './Footer.module.scss';
import facebookLogo from '../../assets/facebook.svg';
import twitterLogo from '../../assets/twitter.svg';
import instagramLogo from '../../assets/instagram.svg';

export default function Footer () {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__images}>
          <img src={facebookLogo} alt='Logo do Facebook'/>
          <img src={twitterLogo} alt='Logo do Twitter'/>
          <img src={instagramLogo} alt='Logo do Instagram'/>
        </div>
        <p>Desenvolvido por Alura</p>
    </footer>
  )
}