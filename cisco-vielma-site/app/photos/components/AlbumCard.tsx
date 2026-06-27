import Image from "next/image";
import Link from "next/link";

import type { Album } from "../album-data";
import styles from "../PhotosPage.module.css";

type AlbumCardProps = {
  album: Album;
};

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link href={`/photos/${album.slug}`} className={styles.albumCard}>
      <div className={styles.albumImageWrap}>
        <Image
          src={album.coverSrc}
          alt={album.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.albumCardImage}
        />
      </div>
      <div className={styles.albumMeta}>
        <p className={styles.albumLocation}>{album.location}</p>
        <h2>{album.title}</h2>
        <p className={styles.albumDescription}>{album.description}</p>
        <span className={styles.albumCount}>{album.photos.length} photos</span>
      </div>
    </Link>
  );
}
