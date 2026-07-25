'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          HeroPulse
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" onClick={closeMenu}>
              Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}