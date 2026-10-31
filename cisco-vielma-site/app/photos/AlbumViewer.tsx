"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { Album } from "./album-data";
import PhotoCard from "./components/PhotoCard";
import styles from "./AlbumViewer.module.css";

type AlbumViewerProps = {
  album: Album;
};

export default function AlbumViewer({ album }: AlbumViewerProps) {
  const [slideshowIndex, setSlideshowIndex] = useState<number | null>(null);

  const activePhoto = slideshowIndex !== null ? album.photos[slideshowIndex] : null;

  const openSlideshow = (index: number) => {
    setSlideshowIndex(index);
  };

  const closeSlideshow = () => {
    setSlideshowIndex(null);
  };

  const showPrevious = () => {
    if (slideshowIndex === null) return;
    setSlideshowIndex((slideshowIndex + album.photos.length - 1) % album.photos.length);
  };

  const showNext = () => {
    if (slideshowIndex === null) return;
    setSlideshowIndex((slideshowIndex + 1) % album.photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (slideshowIndex === null) return;
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
      if (event.key === "Escape") {
        closeSlideshow();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideshowIndex, album.photos.length]);

  return (
    <section className={styles.photosPage}>
      <div className={styles.albumDetailHeader}>
        <a href="/photos" className={styles.backButton}>
          Back to albums
        </a>
        <div className={styles.albumDetailIntro}>
          <p className={styles.eyebrow}>Album</p>
          <h1>{album.title}</h1>
          <p className={styles.albumLocationDetail}>{album.location}</p>
          <p className={styles.introText}>{album.description}</p>
        </div>
      </div>

      <div className={styles.photoList}>
        {album.photos.map((photo, index) => (
          <PhotoCard key={photo.src} photo={photo} index={index} onSelect={openSlideshow} />
        ))}
      </div>

      {activePhoto && (
        <div className={styles.slideshowOverlay} onClick={closeSlideshow}>
          <div className={styles.slideshowContent} onClick={closeSlideshow}>
            <button type="button" className={styles.closeButton} onClick={(event) => {
              event.stopPropagation();
              closeSlideshow();
            }} aria-label="Close slideshow">
              ×
            </button>
            <div
              className={`${styles.slideshowNav} ${styles.slideshowNavLeft}`}
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
            >
              ‹
            </div>
            <div
              className={`${styles.slideshowNav} ${styles.slideshowNavRight}`}
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              ›
            </div>
            <div className={styles.slideshowImageWrap}>
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className={styles.slideshowImage}
              />
              <div className={styles.slideshowBottomBar}>
                <span className={styles.slideshowPosition}>
                  {slideshowIndex !== null ? `${slideshowIndex + 1}/${album.photos.length}` : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
