import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Placeholder from '../components/Placeholder';
import styles from './PhotoExamples.module.css';

const SCREENSHOTS = [
  { key: 'main', icon: '📱', image: '/assets/screenshots/main.png' },
  { key: 'friends', icon: '👥', image: '/assets/screenshots/friends.png' },
  { key: 'leaderboard', icon: '🏆', image: '/assets/screenshots/leaderboard.png' },
  { key: 'wheel', icon: '🎡', image: '/assets/screenshots/wheel.png' },
  { key: 'shop', icon: '🛍️', image: '/assets/screenshots/shop.png' },
  { key: 'profile', icon: '👤', image: '/assets/screenshots/profile.png' },
];

export default function PhotoExamples() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [brokenImages, setBrokenImages] = useState({});
  const activeScreenshot = SCREENSHOTS[active];

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
              {brokenImages[activeScreenshot.key] ? (
                <Placeholder
                  width="100%"
                  height="100%"
                  label={t(`photos.items.${activeScreenshot.key}`)}
                  icon={activeScreenshot.icon}
                />
              ) : (
                <img
                  src={activeScreenshot.image}
                  alt={t(`photos.items.${activeScreenshot.key}`)}
                  className={styles.screenshot}
                  loading="lazy"
                  onError={() =>
                    setBrokenImages((prev) => ({ ...prev, [activeScreenshot.key]: true }))
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
