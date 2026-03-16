import styles from './Placeholder.module.css';

export default function Placeholder({ width = '100%', height = 200, label = '', icon = '🖼️' }) {
  return (
    <div className={styles.placeholder} style={{ width, height }}>
      <span className={styles.icon}>{icon}</span>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
