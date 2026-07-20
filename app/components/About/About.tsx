import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/about/product-mobile.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.product}
              src="/images/about/product.png"
              alt=""
              aria-hidden="true"
            />
          </picture>
        </div>

        <div className={styles.content}>
          {/* Напис «Космето логіка» — SVG з макета */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.script}
            src="/images/about/logo-pink.svg"
            alt="Косметологіка"
          />

          <h2 className={styles.title}>Новий погляд на омолодження</h2>

          <p className={styles.text}>
            Сучасна естетична медицина виходить за межі окремих процедур.
            Сьогодні результат визначає не один метод, а грамотна синергія
            ін&apos;єкційних технологій, професійного догляду, нутрицевтичної
            підтримки, домашніх протоколів та цифрових рішень.
          </p>

          <p className={styles.text}>
            Саме тому ми створили КосметоЛогіку — професійну платформу для
            лікарів-косметологів, дерматологів та фахівців естетичної медицини,
            які прагнуть працювати системно та отримувати прогнозовані
            довгострокові результати.
          </p>
        </div>
      </div>
    </section>
  );
}
