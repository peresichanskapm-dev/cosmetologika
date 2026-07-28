import styles from "./Gallery.module.scss";
import { aosDelay } from "../../lib/aos";

export function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.inner}>
        <div className={`${styles.photo} ${styles.photo1}`} data-aos="fade-up" style={aosDelay(0)} />
        <div className={`${styles.photo} ${styles.photo2}`} data-aos="fade-up" style={aosDelay(1)} />
        <div className={`${styles.photo} ${styles.photo3}`} data-aos="fade-up" style={aosDelay(2)} />
        <div className={`${styles.photo} ${styles.photo4}`} data-aos="fade-up" style={aosDelay(3)} />
      </div>
    </section>
  );
}
