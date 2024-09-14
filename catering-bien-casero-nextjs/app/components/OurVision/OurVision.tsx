import { Button } from "../Button/Button";
import styles from "./OurVision.module.css";

export const OurVision = () => {
  return (
    <section className={styles.ourVision}>
      <div className="container">
        <div className={styles.ourVisionContainer}>
          <div className={styles.ourVisionElements}>
            <h2 className={styles.ourVisionTitle}>Nuestra visión</h2>
            <p className={styles.ouVvisionText}>
              Bien Casero es sinónimo de calidad. Disfrutamos mucho de la
              comida, y sabemos lo que representa poder llegar a tu mesa. Un
              cumpleaños, un encuentro con amigos, un domingo en familia, una
              reunión laboral. Un momento de disfrute con los tuyos. Sabemos lo
              importante que es, por eso cuidamos cada detalle.
            </p>
            <div>
              <Button href="/contact" title="Contactanos" style="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
