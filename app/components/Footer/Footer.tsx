import styles from "./Footer.module.scss";

const FOOTER_NAV = [
  { label: "Про конгрес", href: "#about" },
  { label: "Програма", href: "#topics" },
  { label: "Ціни", href: "#tickets" },
  { label: "Партнери", href: "#partners" },
  { label: "Локація", href: "#location" },
];

export function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Залишились питання?</h3>
            <p className={styles.colText}>Зв&apos;яжіться з нами за телефоном:</p>
            <a href="tel:+380997039656" className={styles.contactPhone}>
              +380 99 703 96 56
            </a>
            <p className={styles.colText}>Рената</p>

            <p className={styles.socialsLabel}>Або напишіть нам у соцмережах:</p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/estyderm"
                className={styles.social}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/header/formkit_instagram.svg" alt="" width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/estyderm"
                className={styles.social}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/header/ic_baseline-facebook.svg" alt="" width={20} height={20} />
              </a>
              <a
                href="https://t.me/esty_derm"
                className={styles.social}
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M21.9 4.3l-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1L18 6.1c.4-.4-.1-.6-.6-.2L6.7 12.8l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5L20.6 2.4c.9-.3 1.7.2 1.3 1.9z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={`${styles.col} ${styles.colRight}`}>
            <h3 className={styles.colTitle}>Бажаєте стати партнером заходу?</h3>
            <p className={styles.colText}>
              Звертайтеся за телефоном{" "}
              <a href="tel:+380951584830" className={styles.inlinePhone}>
                +380 95 158 48 30
              </a>
            </p>
            <p className={styles.colText}>Вікторія</p>
          </div>
        </div>

        <div className={styles.bottom}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.logo}
            src="/images/header/logo-white.svg"
            alt="Косметологіка"
          />

          <nav className={styles.nav} aria-label="Футер">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.copyright}>
          <span>Косметологіка 2026. All rights reserved.</span>
          <span>Made &amp; Developed by Vau.agency.</span>
        </div>
      </div>
    </footer>
  );
}
