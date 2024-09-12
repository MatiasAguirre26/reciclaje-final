import Navbar from '@/components/navbar';
import styles from '@/styles/rewards-page.module.css';

export default function rewards() {
    const categories = ['Todos', 'Alimentos', 'Bebidas', 'Higiene'];
    const rewards = Array(6).fill({ discount: '15%', category: 'Alimentos' });
    return (
    <div className={styles.rewardsContainer}>
        <div className={styles.header}>
          <button className={styles.closeButton}>✖</button>
          <h2>Recompensas</h2>
        </div>
        <div className={styles.points}>
          <p>Puntos disponibles</p>
          <p className={styles.pointsValue}>💰 1000</p>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Buscador" />
          <button className={styles.searchButton}>🔍</button>
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
            <div key={index} className={styles.rewardCard}>
              <div className={styles.rewardImage}>🎁</div>
              <p>{reward.discount}</p>
              <p>{reward.category}</p>
            </div>
          ))}
        </div>
        <Navbar />
    </div>
    )
}
  