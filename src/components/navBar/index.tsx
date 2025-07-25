import { useState } from 'react';
import styles from './style.module.css';

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src='/images/logo-negativo.png' alt='Mundi' />
          <span></span>
        </div>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span>-</span>
        </div>

        <nav
          className={`${styles['nav-links']} ${
            menuAberto ? styles['mobile-menu'] : ''
          }`}
        >
          <a href='#home' onClick={() => setMenuAberto(false)}>
            Home
          </a>
          <a href='#service' onClick={() => setMenuAberto(false)}>
            Serviço
          </a>
          <a href='#banner' onClick={() => setMenuAberto(false)}>
            Saiba mais
          </a>
          {/*<a href='#contact' onClick={() => setMenuAberto(false)}>
            Contato
          </a>
          
          <a href='#shop' onClick={() => setMenuAberto(false)}>
            Shop
          </a>*/}
        </nav>
      </div>
    </header>
  );
}
