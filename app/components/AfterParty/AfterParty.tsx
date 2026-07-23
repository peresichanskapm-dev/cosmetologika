import styles from "./AfterParty.module.scss";

export function AfterParty() {
  return (
    <section className={styles.afterParty}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.textPanel}>
            <p className={styles.script}>
              <span className={styles.scriptWord}>After</span>
              <span className={styles.scriptWord}>Party</span>
            </p>

            <div className={styles.paragraphs}>
              <p>
                З EstyDerm Ви завжди не лише навчаєтесь, а й віддячуєте собі за
                продуктивний день яскравими емоціями та якісним відпочинком.
              </p>
              <p>
                Після насиченої освітньої програми на Вас чекає вечірній
                нетворкінг, невимушене спілкування з колегами та святкова
                атмосфера.
              </p>
              <p>
                Тому що найкращі події — це гармонійне поєднання нових знань,
                професійного розвитку та моментів, які хочеться згадувати ще
                довго після завершення конгресу.
              </p>
            </div>
          </div>

          <div className={styles.photoPanel}>
            <div className={styles.photo} aria-hidden="true" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logo} src="/images/after-party/logo-black.svg" alt="Косметологіка" />

            <div className={styles.guest}>
              <p className={styles.guestName}>Віталій Козловський</p>
              <p className={styles.guestRole}>Спеціальний гість вечора</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
