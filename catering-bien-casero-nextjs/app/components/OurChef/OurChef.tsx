import Image from "next/image";

export const OurChef = () => {
  return (
    <section>
      <h2>Nuestro chef</h2>
      <p>Te presentamos a Joni</p>
      <Image
        src={"/img/joni.png"}
        alt="Jonatan Moreira"
        width={100}
        height={100}
      />
      <p>
        Todo comenzó como un hobbie, cocinando para mi familia y amigos. Hice
        varios cursos y también me formé como Chef.
      </p>
      <p>
        Desde 2018, Catering Bien Casero es mi forma de demostrarle a todos lo
        mucho que amo cocinar y llevar a sus casas comida rica, abundante,
        casera y de calidad.
      </p>
    </section>
  );
};
