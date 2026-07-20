import styles from "./Venue.module.scss";

export function Venue() {
  return (
    <section id="location" className={styles.venue}>
      <div className={styles.inner}>
        <p className={styles.label}>Локація</p>
        <p className={styles.script}>Emily Resort</p>

        <p className={styles.eyebrow}>
          11 вересня 2026 <span className={styles.dot}>·</span> Львів{" "}
          <span className={styles.dot}>·</span> Emily Resort
        </p>

        <p className={styles.text}>
          Один із найбільших івент-холів в Україні, оснащений передовим звуковим
          та світловим обладнанням, що відповідає райдерам світових зірок.
          Сучасна естетична медицина виходить за межі окремих процедур.
        </p>

        <div className={styles.photo} aria-hidden="true" />
      </div>
    </section>
  );
}
