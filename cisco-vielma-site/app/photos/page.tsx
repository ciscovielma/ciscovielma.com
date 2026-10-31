import { albums } from "./album-data";
import AlbumCard from "./components/AlbumCard";
import styles from "./PhotosPage.module.css";

export default function Photos() {
  return (
    <section className={styles.photosPage}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Photo stories</p>
          <h1>A few photo series worth revisiting</h1>
          <p className={styles.introText}>
            Explore a handful of small albums. Each one is a mood, a place, or a sequence of moments. Tap a cover to open the set.
          </p>
        </div>
      </div>

      <div className={styles.albumGrid}>
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}
