'use client';

import { useState } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successMessage} role="status">
        <h3>Thank you for your message!</h3>
        <p>Our team will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} aria-label="Contact Form" onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="full-name">Full Name *</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          required
          aria-required="true"
          placeholder="Jane Doe"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Work Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          placeholder="jane@company.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Send Message
      </button>
    </form>
  );
}