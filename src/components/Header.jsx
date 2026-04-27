import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { key: 'intro', href: '#intro' },
  { key: 'goal', href: '#goal' },
  { key: 'functions', href: '#functions' },
  { key: 'staking', href: '#staking' },
  { key: 'photos', href: '#photos' },
  { key: 'skins', href: '#skins' },
];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#intro" className={styles.logo}>
          {logoMissing ? (
            <span className={styles.logoIcon}>D</span>
          ) : (
            <img
              src="/assets/logo/logo.png"
              alt="Dream Step"
              className={styles.logoImage}
              onError={() => setLogoMissing(true)}
            />
          )}
          <span className={styles.logoText}>Dream Step</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <div className={styles.navLang}>
            <LanguageSwitcher />
          </div>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
