import styles from "./About.module.css";
import { Button } from "../components/Button/Button";
import { OurChef } from "../components/OurChef/OurChef";
import { Noe } from "../components/Noe/Noe";
import { OurVision } from "../components/OurVision/OurVision";
import { FAQ } from "../components/FAQ/FAQ";
import { SocialMediaBanner } from "../components/SocialMediaBanner/SocialMediaBanner";
import { VideosBanner } from "../components/VideosBanner/VideosBanner";
import { Banner } from "../components/Banner";

export default function AboutPage() {
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
      <SocialMediaBanner />
      <VideosBanner />
      <FAQ />
      <Banner />
    </>
  );
}
