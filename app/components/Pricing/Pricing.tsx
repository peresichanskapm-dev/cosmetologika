import styles from "./Pricing.module.scss";

const PLANS = [
  {
    name: "Simple",
    price: "7000 грн",
    variant: "simple",
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
        <header className={styles.head}>
          <p className={styles.script} aria-hidden="true">
            Варіанти участі
          </p>
          <h2 className={styles.title}>Оберіть свій формат</h2>
        </header>

        <div className={styles.cards}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.variant === "vip" ? styles.cardVip : styles.cardSimple}`}
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

              <a href="#register" className={styles.btn}>
                Придбати
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
