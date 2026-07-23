"use client";

import { useEffect, useRef } from "react";
import styles from "./Expo.module.scss";

const ITEMS = [
  "Протестувати новинки ринку",
  "Ознайомитися з обладнанням",
  "Поспілкуватися з виробниками",
  "Отримати спеціальні умови співпраці",
];

// Дублюємо список, щоб трек можна було безшовно зациклити.
const TRACK_ITEMS = [...ITEMS, ...ITEMS];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
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

export function Expo() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Горизонтальний трек зсувається пропорційно вертикальному скролу сторінки
  // (при скролі вниз текст «їде» вліво і безшовно зациклюється) — той самий
  // принцип, що й у Benefits.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const update = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) {
        const offset = (window.scrollY * 0.4) % halfWidth;
        track.style.transform = `translateX(-${offset}px)`;
      }
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={styles.expo}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.script} aria-hidden="true">
            Партнери та експозона
          </p>
          <h2 className={styles.title}>Учасники матимуть змогу</h2>
        </header>
      </div>

      <div className={styles.track} ref={trackRef}>
        {TRACK_ITEMS.map((item, i) => (
          <div key={`${item}-${i}`} className={styles.pill}>
            <CheckIcon />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
