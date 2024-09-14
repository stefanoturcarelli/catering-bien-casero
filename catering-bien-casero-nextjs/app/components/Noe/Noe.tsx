import Image from "next/image";

export const Noe = () => {
  return (
    <section>
      <h2>Noe</h2>
      <p>La mano derecha del chef</p>
      <Image
        src={"/img/noe.jpg"}
        alt="Noelia Echeverria"
        width={100}
        height={100}
      />
      <p>
        ¡Hola! Mi nombre es Noelia, y estoy orgullosa de decir que soy la que
        impulsó a Joni a comenzar este emprendimiento.
      </p>
      <p>
        Actualmente llevo adelante las redes sociales y la coordinación con los
        clientes, así que si te contactas con nosotros seguramente sea yo la que
        esté del otro lado, ¡mucho gusto!
      </p>
    </section>
  );
};
