import styles from "./Partners.module.scss";

const PARTNER_ITEMS = [
  "виставкові стенди",
  "інтеграції у програму",
  "брендовані активності",
  "тест-зони",
  "спонсорські пакети",
  "digital-промоція до та після події",
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#fff" fillOpacity="0.9" />
      <path
        d="M4 10.7727C4 10.7727 4.96429 10.7727 6.25 13C6.25 13 9.82364 7.16645 13 6"
        fill="none"
        stroke="#cf94a2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.script}>Стати партнером</p>
          <h2 className={styles.title}>
            Представте свій бренд аудиторії, яка приймає рішення
          </h2>
        </header>

        <div className={styles.cards}>
          <div className={styles.cardLight}>
            <h3 className={styles.cardTitle}>
              КосметоЛогіка об&apos;єднує лікарів-дерматологів, косметологів та
              власників клінік
            </h3>
            <p className={styles.cardText}>
              — професіоналів, які щодня формують попит на косметику,
              ін&apos;єкційні препарати, апаратні технології, нутрицевтику та
              домашній догляд.
            </p>
            <div className={styles.cardActions}>
              <a href="#register" className={styles.btnPrimary}>
                Зв&apos;язатися із менеджером
              </a>
              <span className={styles.phone}>+380951584830, Вікторія</span>
            </div>
          </div>

          <div className={styles.cardPink}>
            <p className={styles.cardPinkTitle}>Для партнерів доступні:</p>
            <ul className={styles.pinkList}>
              {PARTNER_ITEMS.map((item) => (
                <li key={item} className={styles.pinkItem}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
