import type { Metadata } from 'next';
import Link from 'next/link';
import FaqSection from './components/ui/FaqSection/FaqSection';
import FeatureCard from './components/ui/FeatureCard/FeatureCard';
import { homeContent } from './content/home';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Home | HeroPulse Automation',
  description: homeContent.hero.description,
};

export default function HomePage() {
  return (
    <div className={styles.main}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeContent.structuredData),
        }}
      />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <span className={styles.badge}>{homeContent.hero.badge}</span>
        <h1 id="hero-title" className={styles.title}>
          {homeContent.hero.title}
        </h1>
        <p className={styles.description}>{homeContent.hero.description}</p>
        <div className={styles.ctaGroup}>
          <Link href={homeContent.hero.primaryCta.href} className={styles.primaryBtn}>
            {homeContent.hero.primaryCta.text}
          </Link>
          <Link href={homeContent.hero.secondaryCta.href} className={styles.secondaryBtn}>
            {homeContent.hero.secondaryCta.text}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} aria-labelledby="features-title">
        <div className={styles.sectionHeader}>
          <h2 id="features-title">{homeContent.features.title}</h2>
          <p>{homeContent.features.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {homeContent.features.items.map((item, index) => (
            <FeatureCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={homeContent.faqs} />
    </div>
  );
}