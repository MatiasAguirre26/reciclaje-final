'use client'

import Image from "next/image";
import styles from '@/styles/hero-section.module.css';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar-landing";

export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);

  // // Funciones para abrir y cerrar el menú
  // const openNav = () => {
  //   setIsOpen(true);
  //   document.getElementById("mobile-menu").style.width = "100%";
  // };

  // const closeNav = () => {
  //   setIsOpen(false);
  //   document.getElementById("mobile-menu").style.width = "0%";
  // };


  return (
    <>
      {/* <header className={navbar.header}>
        <div className={navbar.logo}>
          <Image src="/assets/logo.webp" alt="hero" width={200} height={100} />
        </div>
        <nav>
          <ul className={navbar.navLinks}>
            <li><a href="#">Inicio</a></li>
            <li><a href="./pages/aboutUs.html">Sobre nosotros</a></li>
            <li><a href="/auth/login">Iniciar Sesion</a></li>
          </ul>
        </nav>
        <a className={navbar.btn} href="/auth/register">
          <button>Registrarse</button>
        </a>

        <a onClick={openNav} className={navbar.menu} href="#">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </a>

        <div id="mobile-menu" className={navbar.overlay}>
          <a onClick={closeNav} href="" className={navbar.close}>
            &times;
          </a>
          <div className={navbar.overlayContent}>
            <a href="#">Inicio</a>
            <a href="./pages/aboutUs.html">Sobre nosotros</a>
            <a href="./auth/login">Iniciar Sesion</a>
            <a href="/auth/register.html">Registrarse</a>
          </div>
        </div>
      </header> */}
      <Navbar/>
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

        {/* De qué trata la app */}
        <section id="app-overview" className={styles.appOverview}>
          <article>
            <h2 className={styles.heading}>De qué trata la app</h2>
            <p className={styles.paragraph}>
              Nuestra aplicación de reciclaje está diseñada para hacer que el reciclaje sea más fácil, 
              conveniente y gratificante para todos. Registra tus materiales reciclados, gana puntos y canjea 
              recompensas exclusivas, todo desde la palma de tu mano.
            </p>
          </article>
        </section>

        {/* Beneficios del reciclaje */}
        <section className={styles.recyclingBenefits}>
          <div>
            <Image 
              src="/assets/benefits.webp" // Ruta para la imagen en la carpeta `public/assets`
              alt="benefits"
              width={240} // Puedes ajustar el tamaño
              height={240}
              className={styles.img}
            />
          </div>
          <article>
            <h2 className={styles.heading}>Beneficios del Reciclaje</h2>
            <p className={styles.paragraph}>
              El reciclaje es una forma poderosa de proteger nuestro planeta y construir un futuro más sostenible. Al reciclar, contribuyes a la conservación de recursos naturales, la reducción de la contaminación y la preservación del medio ambiente para las generaciones futuras.
            </p>
          </article>
        </section>

        {/* Recompensas */}
        <section id="rewards" className={styles.rewards}>
          <article>
            <h2 className={styles.heading}>Recompensas</h2>
            <p className={styles.paragraph}>
              Desde cupones de descuentos hasta productos exclusivos, nuestras recompensas son una forma de agradecer 
              a nuestros usuarios por su compromiso con el reciclaje. ¡Descubre las recompensas que puedes ganar y únete 
              al movimiento de reciclaje hoy mismo!
            </p>
          </article>
        </section>        

        {/* Cómo se ganan los puntos */}
        <section id="earning-points" className={styles.earningPoints}>
          <article>
            <h2 className={styles.heading}>Cómo se ganan los puntos</h2>
            <p className={styles.paragraph}>
              Ganar puntos es fácil con nuestra aplicación. Simplemente regístrate, registra tus materiales reciclados, participa en eventos 
              de limpieza y más. Cuantos más puntos ganes, más recompensas podrás desbloquear. ¡Empieza a ganar puntos ahora!
            </p>
          </article>
        </section>

        {/*Zonas de reciclaje*/}
        <section id="recyclingPoints" className={styles.recyclingPoints}>
            <article>
                <h2 className={styles.heading}>Puntos de Reciclaje</h2>
                <p className={styles.paragraph}>Encuentra puntos de reciclaje cercanos a ti y haz tu parte para proteger el medio ambiente. Nuestra aplicación te muestra los puntos de reciclaje disponibles en tu área, junto con detalles sobre qué materiales se aceptan y los horarios de funcionamiento</p>        
            </article>
            <div>
                <img src="./assets/points.webp" alt="recycling-points"/>   
            </div>
        </section>
        {/*Colaboraciones y alianzas*/}
        <section id="partnerships" className={styles.partnerships}>
            <article>
                <h2 className={styles.heading}>Colaboraciones y Alianzas</h2>
                <p className={styles.paragraph}>A través de estas alianzas, podemos ofrecer a nuestros usuarios descuentos especiales, eventos exclusivos y más. Únete a nosotros en nuestra misión de hacer del mundo un lugar más limpio y verde</p>                
            </article>
            <div>
                <a href="#"><button>Únete a la misión</button></a>                
            </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
