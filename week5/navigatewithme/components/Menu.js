import styles from '../styles/Menu.module.css';
import Link from 'next/link';

function Menu() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Navigate with me</span>
      <div className={styles.linkContainer}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/shop">
          <a className={styles.link}>Shop</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
