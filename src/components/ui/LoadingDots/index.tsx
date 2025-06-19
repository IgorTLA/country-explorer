import styles from "./styles.module.scss";

export function LoadingDots() {
  return (
    <span className={styles.loading}>
      Loading
      <span className={styles.dots}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </span>
  );
}
