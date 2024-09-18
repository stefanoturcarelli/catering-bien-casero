import Image from "next/image";
import styles from "./IndexBanner.module.css";
import { Button } from "../Button/Button";

export const IndexBanner = () => {
  return (
    <section className={styles.backgroundImage}>
      <div className="container">
        <div className={styles.gridContainer}>
          <p className={styles.text}>CATERING</p>
          <Image
            src="/img/vector-logo.png"
            alt="Catering Bien Casero"
            width={600}
            height={137}
            className={styles.logo}
          />
          <Button
            href="/contact"
            title="¡CONSEGUÍ TU PRESUPUESTO!"
            style="primary"
          ></Button>
        </div>
      </div>
    </section>
  );
};
