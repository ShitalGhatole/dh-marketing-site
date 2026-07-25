import type { Metadata } from 'next';
import FeatureCard from '../components/ui/FeatureCard/FeatureCard';
import { productContent } from '../content/product';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Product',
  description: productContent.hero.description,
};

export default function ProductPage() {
  return (
    <div className={styles.main}>
      {/* Schema metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productContent.structuredData),
        }}
      />

      <section className={styles.hero} aria-labelledby="product-title">
        <span className={styles.badge}>{productContent.hero.badge}</span>
        <h1 id="product-title">{productContent.hero.title}</h1>
        <p>{productContent.hero.description}</p>
      </section>

      <section aria-label="Product Features List">
        <div className={styles.grid}>
          {productContent.features.map((item, index) => (
            <FeatureCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </div>
  );
}