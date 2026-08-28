"use client";

import { useState } from "react";
import styles from "./RegForm.module.scss";
import { aosDelay } from "../../lib/aos";
import { validateLead, type LeadFieldErrors } from "../../lib/leadValidation";

type Status = "idle" | "submitting" | "success" | "error";

export function RegForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});

  function clearFieldError(key: keyof LeadFieldErrors) {
    setFieldErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errors = validateLead({ name, phone, email });
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, formName: "Форма реєстрації на Косметологіку" }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        if (body?.fieldErrors) {
          setFieldErrors(body.fieldErrors);
          setStatus("idle");
          return;
        }
        throw new Error("Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setFieldErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="register" className={styles.reg}>
      <div className={styles.inner}>
        <header className={styles.head} data-aos="fade-up">
          <p className={styles.label}>Станьте частиною</p>
          <p className={styles.script}>Косметологіки</p>
        </header>

        {status === "success" ? (
          <p className={styles.note} role="status">
            Заявку прийнято — ми зв&apos;яжемося з вами найближчим часом.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate data-aos="fade-up" style={aosDelay(1)}>
            <div className={styles.field}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Ім'я та прізвище*"
                aria-label="Ім'я та прізвище"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearFieldError("name");
                }}
              />
              {fieldErrors.name && <p className={styles.fieldError}>{fieldErrors.name}</p>}
            </div>

            <div className={styles.field}>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email*"
                aria-label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearFieldError("email");
                }}
              />
              {fieldErrors.email && <p className={styles.fieldError}>{fieldErrors.email}</p>}
            </div>

            <div className={styles.field}>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="+38 (0__) ___-__-__"
                aria-label="Телефон"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearFieldError("phone");
                }}
              />
              {fieldErrors.phone && <p className={styles.fieldError}>{fieldErrors.phone}</p>}
            </div>

            <button type="submit" className={styles.submit} disabled={status === "submitting"}>
              {status === "submitting" ? "Надсилаємо..." : "Надіслати"}
            </button>

            {status === "error" && (
              <p className={styles.errorMessage}>Щось пішло не так. Спробуйте ще раз.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
