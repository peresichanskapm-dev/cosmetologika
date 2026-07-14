"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

// Пункти меню з макета. href — якорі на майбутні секції (уточнимо при верстці).
const NAV_ITEMS = [
  { label: "Про курс", href: "#about" },
  { label: "Для кого", href: "#for-whom" },
  { label: "Тематичні блоки", href: "#topics" },
  { label: "Що отримаєте?", href: "#benefits" },
  { label: "Ціни та квитки", href: "#tickets" },
];

// ⚠️ ПЛЕЙСХОЛДЕР: підстав реальні посилання на соцмережі.
const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com", icon: "/images/header/formkit_instagram.svg" },
  { name: "Facebook", href: "https://facebook.com", icon: "/images/header/ic_baseline-facebook.svg" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label="Косметологіка">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/header/logo-white.svg" alt="Косметологіка" />
        </a>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Головна навігація"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt="" width={22} height={22} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${open ? styles.burgerLineOpen1 : ""}`} />
          <span className={`${styles.burgerLine} ${open ? styles.burgerLineOpen2 : ""}`} />
          <span className={`${styles.burgerLine} ${open ? styles.burgerLineOpen3 : ""}`} />
        </button>
      </div>
    </header>
  );
}
