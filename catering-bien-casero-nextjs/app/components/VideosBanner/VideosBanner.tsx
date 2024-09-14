import { Video } from "../Video/Video";
import styles from "./VideosBanner.module.css";

export const VideosBanner = () => {
  return (
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
  );
};
