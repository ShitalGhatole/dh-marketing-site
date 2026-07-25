import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} HeroPulse, Inc. All rights reserved.</p>
        <p>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            Built for Digital Heroes Training Task
          </a>
        </p>
      </div>
    </footer>
  );
}