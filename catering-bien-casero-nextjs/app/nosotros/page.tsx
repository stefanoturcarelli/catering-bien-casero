import Image from "next/image";
import styles from "./NosotrosPage.module.css";
import { Button } from "@/app/components/Button/Button";
import { Video } from "../components/Video/Video";

export default function NosotrosPage() {
  return (
    <>
      <section className={styles.aboutUsHeroBanner}>
        <div className="container">
          <div className={styles.aboutUsHeroBannerContainer}>
            <h1 className={styles.aboutUsHeroBannerTitle}>
              Acerca de nosotros
            </h1>
            <p className={styles.aboutUsHeroBannerSubtitle}>Lo que hacemos</p>
            <Button href="/contact" title="¿Hablamos?" style="primary" />
          </div>
        </div>
      </section>
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
          Actualmente llevo adelante las redes sociales y la coordinación con
          los clientes, así que si te contactas con nosotros seguramente sea yo
          la que esté del otro lado, ¡mucho gusto!
        </p>
      </section>
      <section className={styles.ourVision}>
        <div className="container">
          <div className={styles.ourVisionContainer}>
            <div className={styles.ourVisionElements}>
              <h2 className={styles.ourVisionTitle}>Nuestra visión</h2>
              <p className={styles.ouVvisionText}>
                Bien Casero es sinónimo de calidad. Disfrutamos mucho de la
                comida, y sabemos lo que representa poder llegar a tu mesa. Un
                cumpleaños, un encuentro con amigos, un domingo en familia, una
                reunión laboral. Un momento de disfrute con los tuyos. Sabemos
                lo importante que es, por eso cuidamos cada detalle.
              </p>
              <div>
                <Button href="/contact" title="Contactanos" style="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2> Nuestras redes sociales</h2>
        <p>¡Seguinos en nuestras redes!</p>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </section>
      <section className={styles.videos}>
        <div className={styles.videosBackgroundImageContainer}>
          <div className="container">
            <h2 className={styles.videosTitle}>
              ¿Todavía no te tentaste? ¡Mirá estos videos!
            </h2>
            <div className={styles.videosContainer}>
              <Video
                src="/video/bruschettas-video.mp4"
                poster="/img/ham-cheese-toast.jpg"
              />
              <Video src="/video/pernil-video.mp4" poster="/img/Pernil4.png" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2> Preguntas frecuentes</h2>
        <div>
          <p>¿CÓMO HAGO MI PEDIDO?</p>
          <p>
            Contactanos por redes sociales, whatsapp o rellena el formulario de
            contacto. Una vez que coordinamos, te pediremos una seña del 50%
            para reservar tu pedido. El 50% restante se puede abonar el día de
            la entrega.
          </p>
        </div>
        <div>
          <p>¿CON CUÁNTO TIEMPO DE ANTICIPACIÓN DEBO HACER MI PEDIDO?</p>
          <p>
            Los perniles con 72 hs de anticipación es suficiente. Los catering
            personalizados al menos con una semana de anticipación. De todas
            formas, te recomendamos agendar tu evento lo antes posible para
            poder asegurarte disponibilidad de agenda.
          </p>
        </div>
        <div>
          <p>¿CÓMO PUEDO ABONAR?</p>
          <p> Aceptamos efectivo, transferencia bancaria y Mercado Pago.</p>
        </div>
        <div>
          <p>¿CÓMO FUNCIONA EL CUPÓN DE DESCUENTO?</p>
          <p>
            Por cada vez que respondas nuestra encuesta de calidad, te daremos
            un cupón con un 10% de descuento para que lo utilices en tu próximo
            pedido de catering. Es válido por dos meses una vez obtenido el
            cupón.
          </p>
        </div>
        <div>
          <p>¿HACEN ENVÍOS?</p>
          <p>
            Sí, realizamos envíos en Zona Oeste principalmente pero llegamos a
            varios lugares dentro de Zona Sur, Norte y CABA. Cotizamos el envío
            por whatsapp.
          </p>
        </div>
        <div>
          <p>¿HACEN FACTURA?</p>
          <p>¡Si, por supuesto! Emitimos factura C.</p>
        </div>
      </section>
      <section>
        <h2>Contactanos</h2>
        <p>¡Te estamos esperando!</p>
        <p>CORREO ELECTRÓNICO</p>
        <p>
          <a href="mailto:info@cateringbiencasero.com">
            info@cateringbiencasero.com
          </a>
        </p>
        <p>LLAMADAS O WHATSAPP</p>
        <p>
          <a href="tel:(011) 6032-8777">(011) 6032-8777</a>
          L-S 10 a 20hs
        </p>
        <p>UBICANOS</p>
        <p>
          <a target="_blank" href="https://maps.app.goo.gl/6jGqfANu3dzxPBSC9">
            Zona Oeste, Buenos Aires
          </a>
        </p>
      </section>
    </>
  );
}
