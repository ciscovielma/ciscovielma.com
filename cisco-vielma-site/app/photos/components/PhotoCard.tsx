import Image from "next/image";

import type { PhotoItem } from "../album-data";
import styles from "../AlbumViewer.module.css";

type PhotoCardProps = {
  photo: PhotoItem;
  index: number;
  onSelect: (index: number) => void;
};

export default function PhotoCard({ photo, index, onSelect }: PhotoCardProps) {
  return (
    <button
      type="button"
      className={styles.photoCard}
      onClick={() => onSelect(index)}
    >
      <div className={styles.photoImageWrap}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.photoItem}
        />
      </div>
    </button>
  );
}
