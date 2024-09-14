import styles from "./NosotrosPage.module.css";
import { Button } from "@/app/components/Button/Button";
import { Video } from "../components/Video/Video";
import { OurChef } from "../components/OurChef/OurChef";
import { Noe } from "../components/Noe/Noe";
import { OurVision } from "../components/OurVision/OurVision";

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
      <OurChef />
      <Noe />
      <OurVision />
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
