import styles from "./Gallery.module.scss";

export function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.inner}>
        <div className={`${styles.photo} ${styles.photo1}`} />
        <div className={`${styles.photo} ${styles.photo2}`} />
        <div className={`${styles.photo} ${styles.photo3}`} />
        <div className={`${styles.photo} ${styles.photo4}`} />
      </div>
    </section>
  );
}
