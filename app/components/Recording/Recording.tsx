import styles from "./Recording.module.scss";
import { aosDelay } from "../../lib/aos";

// Купівля запису: Woo-товар 13379 на estyderm (LearnPress курс 13350), одразу на чекаут.
const RECORDING_LINK =
  "https://estyderm.com.ua/?add-to-cart=13379&quantity=1&redirect-to=checkout";

export function Recording() {
  return (
    <section id="recording" className={styles.recording}>
      <div className={styles.inner}>
        <h2 className={styles.title} data-aos="fade-up">
          Не вдалося бути з нами офлайн?
        </h2>

        <p className={styles.subtitle} data-aos="fade-up" style={aosDelay(1)}>
          Придбайте запис конгресу та переглядайте матеріали наукової програми у
          зручний для вас час.
        </p>

        <p className={styles.text} data-aos="fade-up" style={aosDelay(2)}>
          Ми зберегли цінну інформацію наукової програми для вас. Конгрес уже
          відбувся офлайн — тепер його ключові матеріали доступні у записі.
        </p>

        <div className={styles.buy} data-aos="fade-up" style={aosDelay(3)}>
          <a href={RECORDING_LINK} className={styles.btn}>
            Придбати запис конгресу
          </a>

          <p className={styles.prices}>
            <span className={styles.priceNew}>2&nbsp;500&nbsp;грн</span>
            <s className={styles.priceOld}>3&nbsp;999&nbsp;грн</s>
          </p>
        </div>
      </div>
    </section>
  );
}
