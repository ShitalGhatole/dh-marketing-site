import type { Metadata } from 'next';
import Link from 'next/link';
import { pricingContent } from '../content/pricing';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Pricing',
  description: pricingContent.hero.description,
};

export default function PricingPage() {
  return (
    <div className={styles.main}>
      <section className={styles.hero} aria-labelledby="pricing-title">
        <span className={styles.badge}>{pricingContent.hero.badge}</span>
        <h1 id="pricing-title">{pricingContent.hero.title}</h1>
        <p>{pricingContent.hero.description}</p>
      </section>

      <section aria-label="Pricing Options" className={styles.pricingGrid}>
        {pricingContent.plans.map((plan, index) => (
          <article
            key={index}
            className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}
          >
            {plan.highlighted && <span className={styles.popularTag}>Most Popular</span>}
            <div>
              <div className={styles.cardHeader}>
                <h2>{plan.name}</h2>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{plan.price}</span>
                  {plan.period && <span className={styles.period}>{plan.period}</span>}
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>

            <Link
              href={plan.ctaHref}
              className={`${styles.ctaBtn} ${plan.highlighted ? styles.primaryCta : ''}`}
            >
              {plan.ctaText}
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}