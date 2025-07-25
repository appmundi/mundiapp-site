import { Instagram } from 'lucide-react';
import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        <nav className={styles.navLinks}>
          <a
            href='/pdf/politica-de-privacidade'
            target='_blank'
            rel='noopener noreferrer'
          >
            Política de Privacidade
          </a>
          <a
            href='/pdf/termos-de-servico'
            target='_blank'
            rel='noopener noreferrer'
          >
            Termos de Serviço
          </a>
          {/*<a href='#'>Contato</a>*/}
        </nav>

        {/*<div className={styles.appButtons}>
          <img src='/appstore.png' alt='App Store' />
          <img src='/googleplay.png' alt='Google Play' />
        </div>*/}
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.logo}></div>
        <span>© 2025 Mundi. Todos os direitos reservados.</span>

        <div className={styles.socialIcons}>
          {
            //<Facebook />
          }
          <Instagram />
        </div>
      </div>
    </footer>
  );
}
