import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <Link href="/" className={styles.logo}>
          HeroPulse
        </Link>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}