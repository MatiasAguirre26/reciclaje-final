'use client';

import Navbar from '@/components/navbar';
import SearchBar  from "@/components/search-bar";
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"; // Tu botón personalizado
import styles from '@/styles/rewards-page.module.css';
import CoinsIcon from '/public/icons/coins.svg';
import TicketIcon from '/public/icons/ticket.svg';

export default function rewards() {
    const categories = ['Todos', 'Coto', 'Día', 'Carrefour'];
    // const rewards = Array(6).fill({ discount: '15%', category: 'Alimentos' });
  // Aquí cada recompensa debería tener un ID único para poder identificarla
    const rewards = [
      { id: 1, discount: '15%', category: 'Alimentos' },
      { id: 2, discount: '10%', category: 'Ropa' },
      { id: 3, discount: '20%', category: 'Electrónica' }
    ];


    return (
    <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
        <div className="mb-8 text-3xl text-center">
          <h1>Recompensas</h1>
        </div>
        <div className={styles.points}>
          <h4>Puntos disponibles</h4>
          <div className='flex items-center justify-center'>
            <CoinsIcon className={styles.navIcon} />
            <p className='ml-3 text-2xl font-bold'> 1000</p>
          </div>
        </div>
        <div>
          <SearchBar/>
        </div>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <button key={index} className={styles.categoryButton}>
              {category}
            </button>
          ))}
        </div>
        <div className={styles.rewardsList}>
          {rewards.map((reward, index) => (
            <Link href={`/rewards/${index}`} key={index} className={styles.rewardCardLink}>
              <div className={styles.rewardCard}>
                <div className={styles.rewardImage}><TicketIcon/></div>
                <p>{reward.discount}</p>
                <p>{reward.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <Navbar />
    </div>
    )
}
  