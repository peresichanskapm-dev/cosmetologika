import styles from "./Cta.module.scss";
import { aosDelay } from "../../lib/aos";

export function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.photoMobile} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow} data-aos="fade-up">
            11 вересня 2026 <span className={styles.dot}>·</span> Львів{" "}
            <span className={styles.dot}>·</span> Emily Resort
          </p>

          <h2 className={styles.title} data-aos="fade-up" style={aosDelay(1)}>
            Формуємо майбутнє естетичної медицини разом
          </h2>

          <p className={styles.text} data-aos="fade-up" style={aosDelay(2)}>
            Приєднуйтесь до головної події року для лікарів-косметологів та
            спеціалістів естетичної медицини.
          </p>

          <div className={styles.actions} data-aos="fade-up" style={aosDelay(3)}>
            <a href="#register" className={styles.btnPrimary}>
              Зареєструватися
            </a>
            <a href="#partners" className={styles.btnOutline}>
              Стати партнером
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
