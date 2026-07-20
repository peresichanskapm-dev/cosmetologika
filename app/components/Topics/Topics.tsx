"use client";

import { useEffect, useRef } from "react";
import styles from "./Topics.module.scss";

const TOPICS = [
  {
    num: "01",
    title: "Injective Solutions",
    subtitle: "Мистецтво мікроінвазивних технологій",
    focus: "Фокус: клітинне оновлення та якість шкіри",
    items: [
      "мезотерапія",
      "біоревіталізація",
      "полінуклеотиди",
      "пептидні комплекси",
      "гіалуронові бустери",
    ],
  },
  {
    num: "02",
    title: "Pro Peels & Skin Renewal Protocols",
    subtitle: "Розумна ексфоліація та регенерація",
    focus: "Фокус: регенерація без агресивної травматизації",
    items: [
      "ферментативні системи",
      "сучасні пілінги",
      "карбокситерапія",
      "відновлення бар'єра",
      "корекція мікробіому",
    ],
  },
  {
    num: "03",
    title: "Energy-Based & Clinical Treatments",
    subtitle: "Естетична та апаратна синергія",
    focus: "Фокус: регенерація без агресивної травматизації",
    items: [
      "лазерні технології",
      "світлові методики",
      "авторські догляди",
      "anti-age протоколи",
      "комбіновані методики",
    ],
  },
  {
    num: "04",
    title: "Home Care",
    subtitle: "Професійний кастомізований догляд",
    focus: "Фокус: закріплення та пролонгація результату",
    items: [
      "персоналізовані рутини",
      "активні компоненти",
      "підтримка між процедурами",
      "підвищення комплаєнсу пацієнта",
    ],
  },
  {
    num: "05",
    title: "Nutritional Supplements & Inner Skin Support",
    subtitle: "Inside-Out Beauty",
    focus: "Фокус: здоров'я шкіри зсередини",
    items: [
      "нутрицевтика",
      "колагенові комплекси",
      "антиоксиданти",
      "дефіцитні стани",
      "глікація та системне запалення",
    ],
  },
  {
    num: "06",
    title: "Smart Tech & Devices",
    subtitle: "Гаджетизація естетики",
    focus: "Фокус: об'єктивний контроль результатів",
    items: [
      "LED-технології",
      "мікрострумові пристрої",
      "AI-діагностика",
      "цифровий супровід пацієнта",
    ],
  },
  {
    num: "07",
    title: "Innovations & Trends",
    subtitle: "Майбутнє естетичної медицини",
    focus: "Фокус: технології, що визначатимуть ринок завтра",
    items: [
      "нейрокосметика",
      "сенсорна система шкіри",
      "sustainability",
      "vegan beauty",
      "глобальні тренди індустрії",
    ],
  },
];

export function Topics() {
  const listRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);

  // Повзунок відображає реальну позицію горизонтального скролу карток (мобілка).
  useEffect(() => {
    const list = listRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!list || !track || !thumb) return;

    const update = () => {
      const trackWidth = track.clientWidth;
      const thumbWidth = Math.max(32, (list.clientWidth / list.scrollWidth) * trackWidth);
      const maxThumbLeft = trackWidth - thumbWidth;
      const maxScroll = list.scrollWidth - list.clientWidth;
      const ratio = maxScroll > 0 ? list.scrollLeft / maxScroll : 0;

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.transform = `translateX(${ratio * maxThumbLeft}px)`;
    };

    update();
    list.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      list.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className={styles.topics}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.script} aria-hidden="true">
            Програма
          </p>
          <h2 className={styles.title}>7 тематичних блоків</h2>
        </header>

        <ul className={styles.list} ref={listRef}>
          {TOPICS.map((topic) => (
            <li key={topic.num} className={styles.row}>
              <div className={styles.main}>
                <span className={styles.num}>{topic.num}</span>
                <div className={styles.mainText}>
                  <h3 className={styles.rowTitle}>{topic.title}</h3>
                  <p className={styles.subtitle}>{topic.subtitle}</p>
                  <span className={styles.focus}>{topic.focus}</span>
                </div>
              </div>

              <ul className={styles.items}>
                {topic.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>

              {topic.num === "02" && <div className={styles.heart} aria-hidden="true" />}
            </li>
          ))}
        </ul>

        <div className={styles.progressTrack} ref={trackRef} aria-hidden="true">
          <span className={styles.progressThumb} ref={thumbRef} />
        </div>
      </div>
    </section>
  );
}
