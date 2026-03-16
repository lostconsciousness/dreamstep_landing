import { useTranslation } from 'react-i18next';
import styles from './Introduction.module.css';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <section id="intro" className={styles.hero}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Web3 Telegram Bot
        </div>

        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>

        <div className={styles.actions}>
          <a href="#" className={styles.cta}>
            {t('hero.cta')}
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>50K+</span>
            <span className={styles.statLabel}>{t('goal.stats.users')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>2B+</span>
            <span className={styles.statLabel}>{t('goal.stats.steps')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>10M+</span>
            <span className={styles.statLabel}>{t('goal.stats.tokens')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
