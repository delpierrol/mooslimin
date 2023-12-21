import styles from "./badge.module.css";
export default function Badge() {
  return (
    <div className={styles.badge}>
      <div className={styles.newlyAdded}>NEWLY ADDED</div>
    </div>
  );
};