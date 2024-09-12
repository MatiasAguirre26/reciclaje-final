import Image from "next/image";
import styles from './styles/hero-section.module.css';
import navbar from './styles/navbar-landing.module.css';

export default function Home() {
  return (
    <>
      <header className={navbar.header}>
      <div className={navbar.logo}>
        <Image src="/assets/logo.webp" alt="hero" width={200} height={100}/> 
      </div>
      <nav>
      <ul className={navbar.navLinks}>
              <li><a href="#">Inicio</a></li>
              <li><a href="./pages/aboutUs.html">Sobre nosotros</a></li>
              <li><a href="/auth/login">Iniciar Sesion</a></li>
      </ul>
      </nav>
      <a className={navbar.btn} href="/auth/register"><button>Registrarse</button></a>

      <a onclick="openNav()" className={navbar.menu} href="#"><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button></a>

      <div id="mobile-menu" className={navbar.overlay}  >
          <a onclick="closeNav()" href="" className={navbar.close}>&times;</a>
          <div className={navbar.overlayContent}>
              <a href="#">Inicio</a>
              <a href="./pages/aboutUs.html">Sobre nosotros</a>
              <a href="./auth/login">Iniciar Sesion</a>
              <a href="/auth/register.html">Registrarse</a>
          </div>
      </div>
      </header>


      
      <main className={styles.main}>
        <section className={styles.hero}>
          <article className={styles.article}>
            <h1 className={styles.h1}>Reciclaje</h1>
              <p>Hace que reciclar sea fácil y gratificante. Regístrate, recicla y gana puntos que luego puedes canjear por increíbles recompensas. “Es así de simple”</p>
              <a href="./auth/login"><button>Únete ahora</button></a>
          </article>
          <div>
            <Image src="/assets/header.webp" alt="hero" width={700} height={500} className="hidden md:block"/>      
          </div>
        </section>
      </main>
    </>
  );
}
