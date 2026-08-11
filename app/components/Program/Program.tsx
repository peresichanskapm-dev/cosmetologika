"use client";

import { useState } from "react";
import styles from "./Program.module.scss";
import { PROGRAM } from "./data";
import { aosDelay } from "../../lib/aos";

const VISIBLE_BLOCKS = 2; // скільки тематичних блоків показано до натискання "Повна програма"

export function Program() {
  const [expanded, setExpanded] = useState(false);
  const blocks = expanded ? PROGRAM : PROGRAM.slice(0, VISIBLE_BLOCKS);

  return (
    <section id="program" className={styles.program}>
      <div className={styles.inner}>
        <header className={styles.head} data-aos="fade-up">
          <p className={styles.script} aria-hidden="true">
            Розклад
          </p>
          <h2 className={styles.title}>Програма дня</h2>
        </header>

        <div className={styles.table}>
          {blocks.map((block, bi) => {
            // ScrollReveal сканує [data-aos] лише раз при монтуванні сторінки, тож блокам,
            // які з'являються пізніше (по кліку "Показати повну програму"), data-aos не
            // призначаємо — інакше вони назавжди лишаться з opacity:0.
            const reveal = bi < VISIBLE_BLOCKS;

            return (
              <div key={block.category} className={styles.block}>
                <div className={styles.categoryRow} data-aos={reveal ? "fade-up" : undefined}>
                  <span className={styles.categoryNum}>{String(bi + 1).padStart(2, "0")}</span>
                  <h3 className={styles.categoryTitle}>{block.category}</h3>
                </div>

                <ul className={styles.list}>
                  {block.items.map((item, i) => (
                    <li
                      key={`${item.time}-${item.speaker}`}
                      className={styles.row}
                      data-aos={reveal ? "fade-up" : undefined}
                      style={reveal ? aosDelay(i) : undefined}
                    >
                      <p className={styles.time}>{item.time}</p>

                      <div className={styles.topic}>
                        <h4 className={styles.topicTitle}>{item.title}</h4>
                        {item.sub && <p className={styles.topicSub}>{item.sub}</p>}
                      </div>

                      <div className={styles.speaker}>
                        <h4 className={styles.speakerName}>{item.speaker}</h4>
                        {item.role && <p className={styles.speakerRole}>{item.role}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {PROGRAM.length > VISIBLE_BLOCKS && (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.moreBtn}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Згорнути програму" : "Показати повну програму"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
