import type { Metadata } from 'next';
import { contactContent } from '../content/contact';
import styles from './page.module.scss';
import ContactForm from '../components/ui/ContactForm/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: contactContent.hero.description,
};

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <span className={styles.badge}>{contactContent.hero.badge}</span>
        <h1 id="contact-title">{contactContent.hero.title}</h1>
        <p>{contactContent.hero.description}</p>
      </section>

      <div className={styles.contactGrid}>
        <section className={styles.infoSection} aria-labelledby="info-heading">
          <h2 id="info-heading">Contact Information</h2>
          <p className={styles.subtext}>Reach out directly or send us a message via the form.</p>

          <div className={styles.infoCardGroup}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:sales@heropulse.com">sales@heropulse.com</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <strong>Visit Our Office</strong>
                <span>100 Innovation Way, Suite 400<br />San Francisco, CA</span>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}