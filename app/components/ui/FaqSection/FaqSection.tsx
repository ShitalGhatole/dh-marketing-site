import styles from './FaqSection.module.scss';

export interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FaqItemData[];
}

export default function FaqSection({ title = 'Frequently Asked Questions', faqs }: FaqSectionProps) {
  // Dynamically generate FAQPage schema for perfect SEO scoring
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={styles.faqs} aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 id="faq-title">{title}</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className={styles.faqItem} 
            open={index === 0} // First FAQ open by default
          >
            <summary className={styles.summary}>
              <span className={styles.questionText}>{faq.question}</span>
              <span className={styles.icon} aria-hidden="true">+</span>
            </summary>
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}