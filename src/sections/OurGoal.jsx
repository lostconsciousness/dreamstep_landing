import { useTranslation } from 'react-i18next';
import Placeholder from '../components/Placeholder';
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
              <span className={styles.highlightIcon}>🏃</span>
              <span className={styles.highlightText}>10,000+ steps/day</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>💰</span>
              <span className={styles.highlightText}>Real Web3 tokens</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🌍</span>
              <span className={styles.highlightText}>Global community</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <Placeholder
            height={400}
            label="Goal illustration"
            icon="🎯"
          />
        </div>
      </div>
    </section>
  );
}
