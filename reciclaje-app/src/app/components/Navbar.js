'use client'
import styles from '../styles/Navbar.module.css';

// Importamos los iconos SVG
import HomeIcon from '../../../public/icons/home.svg';

export default function Navbar() {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/home"><HomeIcon className={styles.navIcon} />
              Inicio
            </a>
          </li>
          <li className={styles.navItem}><a href="/exchange">Canje</a></li>
          <li className={styles.navItem}><a href="/map">Mapa</a></li>
          <li className={styles.navItem}><a href="/recycle">Reciclar</a></li>
        </ul>
      </nav>
    );
}
  