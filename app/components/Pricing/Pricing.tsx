import styles from "./Pricing.module.scss";
import { aosDelay } from "../../lib/aos";

const PLANS = [
  {
    name: "Simple",
    price: "7000 грн",
    variant: "simple",
    link: "https://secure.wayforpay.com/button/bc7c0e9d7c4df",
    items: [
      "Участь у конгресі",
      "Welcome coffee break",
      "Пакет учасника",
      "Сертифікат проходження конгресу",
      "Доступ до вечірньої програми After party",
    ],
  },
  {
    name: "VIP",
    price: "11000 грн",
    variant: "vip",
    link: "https://secure.wayforpay.com/button/b1502d8f18e58",
    items: [
      "Окрема стійка реєстрації",
      "Розміщення у перших рядах залу",
      "Участь у конгресі",
      "Welcome coffee break",
      "Пакет учасника",
      "Сертифікат проходження конгресу",
      "Обід та вечеря 11 вересня",
      "Доступ до вечірньої програми After party",
    ],
  },
];

export function Pricing() {
  return (
    <section id="tickets" className={styles.pricing}>
      <div className={styles.inner}>
        <header className={styles.head} data-aos="fade-up">
          <p className={styles.script} aria-hidden="true">
            Варіанти участі
          </p>
          <h2 className={styles.title}>Оберіть свій формат</h2>
        </header>

        <div className={styles.cards}>
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.variant === "vip" ? styles.cardVip : styles.cardSimple}`}
              data-aos="fade-up"
              style={aosDelay(i)}
            >
              <div className={styles.cardHead}>
                <h3 className={styles.name}>{plan.name}</h3>
                <span className={styles.price}>{plan.price}</span>
              </div>

              <ul className={styles.items}>
                {plan.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Придбати
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
