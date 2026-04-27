import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AvailableSkins.module.css';

const BASE_URL = 'https://odm-back.store/media/dream_step_new';

const CATEGORIES = [
  {
    key: 'boy',
    icon: '👦',
    skins: ['Alexander', 'Daniel', 'David', 'James', 'John', 'Lucas', 'Michael', 'Muhammad', 'William'],
  },
  {
    key: 'girl',
    icon: '👧',
    skins: ['Anna', 'Ava', 'Emma', 'Fatima', 'Isabella', 'Maria', 'Mia', 'Olivia', 'Sophia'],
  },
  {
    key: 'man',
    icon: '👨',
    skins: ['Amir', 'Gabriel', 'Henry', 'Ibrahim', 'Liam', 'Mateo', 'Noah', 'Omar', 'Raj', 'Wei'],
  },
  {
    key: 'woman',
    icon: '👩',
    skins: ['Aisha', 'Amelia', 'Chloe', 'Grace', 'Hannah', 'Layla', 'Sara', 'Sofia', 'Victoria'],
  },
  {
    key: 'pets',
    icon: '🐾',
    skins: ['Bella', 'Charlie', 'Lucy', 'Luna', 'Max', 'Simba'],
  },
];

export default function AvailableSkins() {
  const { t } = useTranslation();
  const [activeCat, setActiveCat] = useState(0);

  const category = CATEGORIES[activeCat];

  return (
    <section id="skins" className={`section ${styles.skins}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">{t('skins.badge')}</span>
          <h2 className="section-title">{t('skins.title')}</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            {t('skins.description')}
          </p>
          <a
            href="https://dreamstep.world/characters"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.charactersLink}
          >
            {t('skins.charactersLink')}
          </a>
        </div>

        <div className={styles.tabs}>
          {CATEGORIES.map(({ key, icon }, i) => (
            <button
              key={key}
              className={`${styles.tab} ${i === activeCat ? styles.tabActive : ''}`}
              onClick={() => setActiveCat(i)}
            >
              <span className={styles.tabIcon}>{icon}</span>
              <span>{t(`skins.categories.${key}`)}</span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {category.skins.map((name) => (
            <div key={`${category.key}-${name}`} className={styles.card}>
              <div className={styles.cardVisual}>
                <img
                  src={`${BASE_URL}/${name}.gif`}
                  alt={name}
                  className={styles.cardImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardName}>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
