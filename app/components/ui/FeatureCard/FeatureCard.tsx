import styles from './FeatureCard.module.scss';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}