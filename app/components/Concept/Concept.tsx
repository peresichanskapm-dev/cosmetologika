import styles from "./Concept.module.scss";

// Теги напрямків. Останній (FUTURE) — залитий, без стрілки.
const TAGS = ["INJECT", "RENEW", "TREAT", "SUPPORT", "MAINTAIN", "TECH", "FUTURE"];

const BENEFITS = [
  "науковий підхід",
  "клінічний досвід",
  "інноваційні технології",
  "комерційно успішні протоколи",
  "міжнародні тренди",
];

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" />
      <path
        d="M4 10.7727C4 10.7727 4.96429 10.7727 6.25 13C6.25 13 9.82364 7.16645 13 6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Concept() {
  return (
    <section id="topics" className={styles.concept}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.script} aria-hidden="true">
            Концепція події
          </p>
          <h2 className={styles.title}>Next Gen Aesthetics</h2>
        </header>

        <ul className={styles.tags}>
          {TAGS.map((tag, i) => {
            const isLast = i === TAGS.length - 1;
            return (
              <li key={tag} className={styles.tag}>
                {tag}
                {!isLast && <span className={styles.arrow}>→</span>}
              </li>
            );
          })}
        </ul>

        <div className={styles.card}>
          <p className={styles.cardTitle}>
            <span className={styles.accent}>7 тематичних напрямків,</span>
            <br />
            що формують сучасну
            <br />
            екосистему терапевтичної
            <br />
            естетики.
          </p>

          <div className={styles.benefits}>
            <p className={styles.benefitsHead}>Тут об&apos;єднуються:</p>
            <ul className={styles.benefitsList}>
              {BENEFITS.map((item) => (
                <li key={item} className={styles.benefitItem}>
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
