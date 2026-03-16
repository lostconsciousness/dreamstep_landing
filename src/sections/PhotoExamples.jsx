import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Placeholder from '../components/Placeholder';
import styles from './PhotoExamples.module.css';

const SCREENSHOTS = [
  { key: 'main', icon: '📱' },
  { key: 'wallet', icon: '💳' },
  { key: 'leaderboard', icon: '🏆' },
  { key: 'wheel', icon: '🎡' },
  { key: 'shop', icon: '🛍️' },
  { key: 'profile', icon: '👤' },
];

export default function PhotoExamples() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <section id="photos" className={`section ${styles.photos}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">{t('photos.badge')}</span>
          <h2 className="section-title">{t('photos.title')}</h2>
        </div>

        <div className={styles.viewer}>
          <nav className={styles.menu}>
            {SCREENSHOTS.map(({ key, icon }, i) => (
              <button
                key={key}
                className={`${styles.menuItem} ${i === active ? styles.menuItemActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.menuIcon}>{icon}</span>
                <span className={styles.menuLabel}>
                  {t(`photos.items.${key}`)}
                </span>
              </button>
            ))}
          </nav>

          <div className={styles.phone}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <Placeholder
                width="100%"
                height="100%"
                label={t(`photos.items.${SCREENSHOTS[active].key}`)}
                icon={SCREENSHOTS[active].icon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
