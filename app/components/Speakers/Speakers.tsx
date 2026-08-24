"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { SPEAKERS } from "./data";
import styles from "./Speakers.module.scss";
import { aosDelay } from "../../lib/aos";

// Кількість колонок сітки на кожному брейкпоінті (має збігатись зі .grid у scss)
const COLUMNS = { desktop: 4, tablet: 2, mobile: 1 };

// На мобільному до розгортання показуємо лише стільки карток (десктоп/таблет — завжди всі).
const VISIBLE_MOBILE = 5;

// Плитка-лоадер добирає решту останнього ряду: якщо спікери займають рядок
// повністю (або рядок порожній) — вона на всю ширину сітки.
function loaderSpan(speakersCount: number, columns: number) {
  const filled = speakersCount % columns;
  return filled === 0 ? columns : columns - filled;
}

export function Speakers() {
  const [expanded, setExpanded] = useState(false);
  const loaderStyle = {
    "--span-desktop": loaderSpan(SPEAKERS.length, COLUMNS.desktop),
    "--span-tablet": loaderSpan(SPEAKERS.length, COLUMNS.tablet),
    "--span-mobile": loaderSpan(SPEAKERS.length, COLUMNS.mobile),
  } as CSSProperties;

  return (
    <section id="speakers" className={styles.speakers}>
      <div className={styles.inner}>
        <p className={styles.script} data-aos="fade-up">Спікери</p>

        <div className={`${styles.grid} ${!expanded ? styles.collapsed : ""}`}>
          {SPEAKERS.map((s, i) => (
            <article
              key={i}
              className={`${styles.card} ${i >= VISIBLE_MOBILE ? styles.overflowCard : ""}`}
              data-aos="fade-up"
              style={aosDelay(i)}
            >
              <div
                className={styles.photo}
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden="true"
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{s.name}</h3>
                {s.role && <p className={styles.role}>{s.role}</p>}
              </div>
            </article>
          ))}

          <div
            className={styles.loader}
            style={{ ...loaderStyle, ...aosDelay(SPEAKERS.length) }}
            data-aos="fade-up"
          >
            {/* Фото-іконка очікування → public/images/speakers/loader.webp */}
            <div className={styles.loaderPhoto} aria-hidden="true" />
            <div className={styles.loaderInfo}>
              <p className={styles.loaderText}>
                Очікується оголошення нових спікерів
              </p>
            </div>
          </div>
        </div>

        {SPEAKERS.length > VISIBLE_MOBILE && !expanded && (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.moreBtn}
              onClick={() => setExpanded(true)}
            >
              Дивитись всіх спікерів
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
