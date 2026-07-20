"use client";

import { useState } from "react";
import styles from "./RegForm.module.scss";

export function RegForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Відправки поки немає — лише клієнтське підтвердження (рівень B).
    setSent(true);
  }

  return (
    <section id="register" className={styles.reg}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.label}>Станьте частиною</p>
          <p className={styles.script}>Косметологіки</p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ім'я та прізвище*"
            required
            aria-label="Ім'я та прізвище"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email*"
            required
            aria-label="Email"
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="+38 (0__) ___-__-__"
            aria-label="Телефон"
          />
          <button type="submit" className={styles.submit}>
            {sent ? "Дякуємо!" : "Надіслати"}
          </button>
        </form>

        {sent && (
          <p className={styles.note} role="status">
            Заявку прийнято — ми зв&apos;яжемося з вами найближчим часом.
          </p>
        )}
      </div>
    </section>
  );
}
