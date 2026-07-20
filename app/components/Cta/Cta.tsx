import styles from "./Cta.module.scss";

export function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.photoMobile} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            11 вересня 2026 <span className={styles.dot}>·</span> Львів{" "}
            <span className={styles.dot}>·</span> Emily Resort
          </p>

          <h2 className={styles.title}>
            Формуємо майбутнє естетичної медицини разом
          </h2>

          <p className={styles.text}>
            Приєднуйтесь до головної події року для лікарів-косметологів та
            спеціалістів естетичної медицини.
          </p>

          <div className={styles.actions}>
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
