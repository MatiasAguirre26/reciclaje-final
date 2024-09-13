import Navbar from '@/components/navbar';
import Link from 'next/link';
import styles from '@/styles/dashboard.module.css';

export default function Dashboard() {
    return (
    <div className={`${styles.container} text-white`}>
      <header className={styles.header}>
        <h1>Hola, Matias</h1>
        <p>Puntos disponibles: <span className="points">1000</span></p>
      </header>
      <nav className={styles.nav}>
        <Link href="/recycle" legacyBehavior><a>Reciclar</a></Link>
        <Link href="/map" legacyBehavior><a>Mapa</a></Link>
        <Link href="/rewards" legacyBehavior><a>Canjear</a></Link>
      </nav>
      <section className={styles.manual}>
        <h2>Manual de reciclaje</h2>
        <p>Aprende la manera correcta de reciclar tus materiales</p>
      </section>
      <section className={styles.coupons}>
        <h2>Tus cupones de descuento</h2>
        <div className={styles.coupon}>
          <p>15% en alimentos</p>
          <span className={styles.time}>18:40</span>
        </div>
        <div className={styles.coupon}>
          <p>15% en alimentos</p>
          <span className={styles.time}>18:40</span>
        </div>
        <Link href="/ver-mas" legacyBehavior><a>Ver más</a></Link>
      </section>
        <Navbar/ >
    </div>
    )

}
  