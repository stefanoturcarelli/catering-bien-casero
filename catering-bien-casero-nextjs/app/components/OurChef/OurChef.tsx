import Image from "next/image";
import styles from "./OurChef.module.css";

export const OurChef = () => {
  return (
    <section className={styles.ourChef}>
      <div className="container">
        <div className={styles.ourChefContainer}>
          <div className={styles.ourChefTextContent}>
            <h2 className={styles.sectionOurChefTitle}>Nuestro chef</h2>
            <p className={styles.sectionOurChefSubtitle}>
              Te presentamos a Joni
            </p>
            <Image
              className={styles.ourChefImageMobile}
              src={"/img/joni.png"}
              alt="Jonatan Moreira"
              width={500}
              height={350}
            />
            <p>
              Todo comenzó como un hobbie, cocinando para mi familia y amigos.
              Hice varios cursos y también me formé como Chef.
            </p>
            <p>
              Desde 2018, Catering Bien Casero es mi forma de demostrarle a
              todos lo mucho que amo cocinar y llevar a sus casas comida rica,
              abundante, casera y de calidad.
            </p>
          </div>
          <div className={styles.ourChefImageDesktop}>
            <Image
              className={styles.ourChefImageDesktop}
              src={"/img/joni.png"}
              alt={"Jontan Moreira"}
              width={500}
              height={350}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
