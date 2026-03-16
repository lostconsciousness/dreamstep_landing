import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DisclaimerModal from './DisclaimerModal';
import styles from './Footer.module.css';

const NAV_ITEMS = [
  { key: 'intro', href: '#intro' },
  { key: 'goal', href: '#goal' },
  { key: 'functions', href: '#functions' },
  { key: 'staking', href: '#staking' },
  { key: 'photos', href: '#photos' },
  { key: 'skins', href: '#skins' },
];

const SOCIALS = [
  { name: 'Telegram', icon: '✈️', href: '#' },
  { name: 'Twitter / X', icon: '𝕏', href: '#' },
  { name: 'Discord', icon: '💬', href: '#' },
  { name: 'TikTok', icon: '🎵', href: '#' },
];

export default function Footer() {
  const { t } = useTranslation();
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>D</span>
                <span className={styles.logoText}>Dream Step</span>
              </div>
              <p className={styles.tagline}>{t('footer.tagline')}</p>
            </div>

            <div className={styles.columns}>
              <div className={styles.col}>
                <h4 className={styles.colTitle}>{t('footer.links.title')}</h4>
                {NAV_ITEMS.map(({ key, href }) => (
                  <a key={key} href={href} className={styles.link}>
                    {t(`nav.${key}`)}
                  </a>
                ))}
              </div>

              <div className={styles.col}>
                <h4 className={styles.colTitle}>{t('footer.social.title')}</h4>
                {SOCIALS.map(({ name, icon, href }) => (
                  <a key={name} href={href} className={styles.link}>
                    <span className={styles.socialIcon}>{icon}</span> {name}
                  </a>
                ))}
              </div>

              <div className={styles.col}>
                <h4 className={styles.colTitle}>{t('footer.legal.title')}</h4>
                <a href="#" className={styles.link}>{t('footer.privacy')}</a>
                <a href="#" className={styles.link}>{t('footer.terms')}</a>
                <button
                  className={styles.disclaimerBtn}
                  onClick={() => setDisclaimerOpen(true)}
                >
                  {t('footer.disclaimer')}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <DisclaimerModal
        open={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
      />
    </>
  );
}
