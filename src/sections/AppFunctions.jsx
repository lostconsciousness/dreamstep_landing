import { useTranslation } from 'react-i18next';
import styles from './AppFunctions.module.css';

const FEATURES = [
  { key: 'walk', icon: '👟', color: '#6c5ce7' },
  { key: 'friends', icon: '👥', color: '#00cec9' },
  { key: 'wheel', icon: '🎡', color: '#fdcb6e' },
  { key: 'level', icon: '⬆️', color: '#e17055' },
  { key: 'bonuses', icon: '🛒', color: '#a29bfe' },
];

export default function AppFunctions() {
  const { t } = useTranslation();

  return (
    <section id="functions" className={`section ${styles.functions}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">{t('functions.badge')}</span>
          <h2 className="section-title">{t('functions.title')}</h2>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ key, icon, color }, index) => (
            <div
              key={key}
              className={styles.card}
              style={{ '--card-accent': color }}
            >
              <div className={styles.cardNumber}>0{index + 1}</div>
              <div className={styles.cardIcon}>{icon}</div>
              <h3 className={styles.cardTitle}>
                {t(`functions.items.${key}.title`)}
              </h3>
              <p className={styles.cardDesc}>
                {t(`functions.items.${key}.description`)}
              </p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
