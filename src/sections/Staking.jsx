import { useTranslation } from 'react-i18next';
import styles from './Staking.module.css';

const FEATURES = [
  { key: 'flexible', icon: '📅', color: '#6c5ce7' },
  { key: 'rewards', icon: '💎', color: '#00cec9' },
  { key: 'secure', icon: '🛡️', color: '#00b894' },
];

export default function Staking() {
  const { t } = useTranslation();

  return (
    <section id="staking" className={`section ${styles.staking}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">{t('staking.badge')}</span>
          <h2 className="section-title">{t('staking.title')}</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            {t('staking.description')}
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ key, icon, color }) => (
            <div
              key={key}
              className={styles.card}
              style={{ '--card-accent': color }}
            >
              <div className={styles.cardIcon}>{icon}</div>
              <h3 className={styles.cardTitle}>
                {t(`staking.features.${key}.title`)}
              </h3>
              <p className={styles.cardDesc}>
                {t(`staking.features.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
