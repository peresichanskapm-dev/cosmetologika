import styles from "./Venue.module.scss";
import { aosDelay } from "../../lib/aos";

export function Venue() {
  return (
    <section id="location" className={styles.venue}>
      <div className={styles.inner}>
        <p className={styles.label} data-aos="fade-up">Локація</p>
        <p className={styles.script} data-aos="fade-up" style={aosDelay(1)}>Emily Resort</p>

        <p className={styles.eyebrow} data-aos="fade-up" style={aosDelay(2)}>
          11 вересня 2026 <span className={styles.dot}>·</span> Львів{" "}
          <span className={styles.dot}>·</span> Emily Resort
        </p>

        <p className={styles.text} data-aos="fade-up" style={aosDelay(3)}>
          Один із найбільших івент-холів в Україні, оснащений передовим звуковим
          та світловим обладнанням, що відповідає райдерам світових зірок.
          Сучасна естетична медицина виходить за межі окремих процедур.
        </p>

        <div className={styles.photo} data-aos="fade-up" style={aosDelay(4)} aria-hidden="true" />
      </div>
    </section>
  );
}
