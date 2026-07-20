import styles from "./Audience.module.scss";

const GROUPS = [
  {
    title: "Лікарів-косметологів",
    items: ["ін'єкційна косметологія", "anti-age терапія", "відновлення якості шкіри"],
  },
  {
    title: "Лікарів-дерматологів",
    items: ["терапевтичні протоколи", "робота зі складними клінічними випадками"],
  },
  {
    title: "Керівників клінік та центрів",
    items: ["масштабування послуг", "впровадження нових технологій"],
  },
  {
    title: "Косметологів середньої ланки",
    items: ["професійні догляди", "домашній супровід пацієнтів", "продаж космецевтики"],
  },
];

export function Audience() {
  return (
    <section id="for-whom" className={styles.audience}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.script} aria-hidden="true">
            Для кого
          </p>
          <h2 className={styles.title}>Цей конгрес</h2>
        </header>

        <ul className={styles.grid}>
          {GROUPS.map((group) => (
            <li key={group.title} className={styles.card}>
              <div className={styles.heart} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
