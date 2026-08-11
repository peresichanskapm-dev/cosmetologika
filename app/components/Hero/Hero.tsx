import styles from "./Hero.module.scss";
import { aosDelay } from "../../lib/aos";

function HeroBadge() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.badgeImage} src="/images/hero/hero-badge-13.webp" alt="13" />
      <span className={styles.badgeText}>балів БПР</span>
    </>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow} data-aos="fade-up">
          11 вересня 2026 <span className={styles.dot}>·</span> Львів{" "}
          <span className={styles.dot}>·</span> Emily Resort
        </p>

        <h1 className={styles.title} data-aos="fade-up" style={aosDelay(1)}>
          Next Gen Aesthetics
        </h1>

        <p className={styles.subtitle} data-aos="fade-up" style={aosDelay(2)}>
          Маніфест сучасної терапевтичної естетики
        </p>

        <p className={styles.description} data-aos="fade-up" style={aosDelay(3)}>
          Інтелектуальне управління якістю шкіри: від ін&apos;єкційних протоколів
          та апаратних технологій до нутрицевтики,{" "}
          AI&#8209;діагностики та майбутнього естетичної медицини.
        </p>

        {/* Плашка «13 балів БПР» — на мобілці в потоці, на десктопі накладена на фото (.badgeOverlay) */}
        <div className={styles.badgeInline} data-aos="fade-up" style={aosDelay(4)}>
          <HeroBadge />
        </div>

        <div className={styles.actions} data-aos="fade-up" style={aosDelay(4)}>
          <a href="#register" className={styles.btnPrimary}>
            Зареєструватися
          </a>
          <a href="#partners" className={styles.btnOutline}>
            Стати партнером
          </a>
        </div>
      </div>

      <div className={styles.badgeOverlay} data-aos="fade-up" style={aosDelay(4)}>
        <HeroBadge />
      </div>
    </section>
  );
}
