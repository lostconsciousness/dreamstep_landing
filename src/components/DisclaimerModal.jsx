import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './DisclaimerModal.module.css';

export default function DisclaimerModal({ open, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          &times;
        </button>

        <h2 className={styles.title}>
          {t('footer.disclaimerContent.title')}
        </h2>

        <div className={styles.body}>
          <h3 className={styles.sectionTitle}>
            {t('footer.disclaimerContent.section1Title')}
          </h3>
          <p className={styles.text}>
            {t('footer.disclaimerContent.section1')}
          </p>

          <h3 className={styles.sectionTitle}>
            {t('footer.disclaimerContent.section2Title')}
          </h3>
          <p className={styles.text}>
            {t('footer.disclaimerContent.section2')}
          </p>
        </div>
      </div>
    </div>
  );
}
