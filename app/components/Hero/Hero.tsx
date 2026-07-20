import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          11 вересня 2026 <span className={styles.dot}>·</span> Львів{" "}
          <span className={styles.dot}>·</span> Emily Resort
        </p>

        <h1 className={styles.title}>Next Gen Aesthetics</h1>

        <p className={styles.subtitle}>
          Маніфест сучасної терапевтичної естетики
        </p>

        <p className={styles.description}>
          Інтелектуальне управління якістю шкіри: від ін&apos;єкційних протоколів
          та апаратних технологій до нутрицевтики, AI-діагностики та майбутнього
          естетичної медицини.
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
    </section>
  );
}
