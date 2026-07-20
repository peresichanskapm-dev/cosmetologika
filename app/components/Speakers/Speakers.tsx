import type { CSSProperties } from "react";
import { SPEAKERS } from "./data";
import styles from "./Speakers.module.scss";

// Кількість колонок сітки на кожному брейкпоінті (має збігатись зі .grid у scss)
const COLUMNS = { desktop: 4, tablet: 3, mobile: 1 };

// Плитка-лоадер добирає решту останнього ряду: якщо спікери займають рядок
// повністю (або рядок порожній) — вона на всю ширину сітки.
function loaderSpan(speakersCount: number, columns: number) {
  const filled = speakersCount % columns;
  return filled === 0 ? columns : columns - filled;
}

export function Speakers() {
  const loaderStyle = {
    "--span-desktop": loaderSpan(SPEAKERS.length, COLUMNS.desktop),
    "--span-tablet": loaderSpan(SPEAKERS.length, COLUMNS.tablet),
    "--span-mobile": loaderSpan(SPEAKERS.length, COLUMNS.mobile),
  } as CSSProperties;

  return (
    <section id="speakers" className={styles.speakers}>
      <div className={styles.inner}>
        <p className={styles.script}>Спікери</p>

        <div className={styles.grid}>
          {SPEAKERS.map((s, i) => (
            <article key={i} className={styles.card}>
              <div
                className={styles.photo}
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden="true"
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.role}>{s.role}</p>
              </div>
            </article>
          ))}

          <div className={styles.loader} style={loaderStyle}>
            {/* Фото-іконка очікування → public/images/speakers/loader.webp */}
            <div className={styles.loaderPhoto} aria-hidden="true" />
            <div className={styles.loaderInfo}>
              <p className={styles.loaderText}>
                Очікується оголошення нових спікерів
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
