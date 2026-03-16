import { useTranslation } from 'react-i18next';
import styles from './OurGoal.module.css';

export default function OurGoal() {
  const { t } = useTranslation();

  return (
    <section id="goal" className={`section ${styles.goal}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className="section-badge">{t('goal.badge')}</span>
          <h2 className="section-title">{t('goal.title')}</h2>
          <p className="section-description">{t('goal.description')}</p>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>⚡</span>
              <span className={styles.highlightText}>4 sessions / day</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>⏱️</span>
              <span className={styles.highlightText}>2 hours each</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🌐</span>
              <span className={styles.highlightText}>100% Web3</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.tokenomics}>
            <h3 className={styles.tokenomicsTitle}>{t('goal.tokenomics.title')}</h3>
            <p className={styles.tokenomicsDesc}>{t('goal.tokenomics.description')}</p>
            <div className={styles.tokenomicsBars}>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: '90%', background: 'var(--gradient-primary)' }} />
                <span className={styles.barLabel}>{t('goal.tokenomics.users')}</span>
              </div>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: '5%', background: '#fdcb6e', minWidth: 40 }} />
                <span className={styles.barLabel}>{t('goal.tokenomics.buyback')}</span>
              </div>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: '5%', background: '#e17055', minWidth: 40 }} />
                <span className={styles.barLabel}>{t('goal.tokenomics.team')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
