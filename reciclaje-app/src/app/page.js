import Image from "next/image";
import styles from './styles/hero-section.module.css';

export default function Home() {
  return (
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
  );
}
