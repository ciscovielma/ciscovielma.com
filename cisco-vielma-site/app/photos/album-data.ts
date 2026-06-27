export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
};

export type Album = {
  id: number;
  slug: string;
  title: string;
  location: string;
  description: string;
  coverSrc: string;
  photos: PhotoItem[];
};

export const albums: Album[] = [
  {
    id: 1,
    slug: "lake-pocotopaug",
    title: "Wesleyan Sailing",
    location: "Lake Pocotopaug, Connecticut",
    description: "Fall practice with the Wesleyan sailing team: crisp water, low light, and quietly charged moments on the lake.",
    coverSrc: "/lake-pocotopaug/1.jpg",
    photos: [
      { src: "/lake-pocotopaug/1.jpg", alt: "alt", caption: "caption" },
      { src: "/lake-pocotopaug/2.jpg", alt: "alt", caption: "caption" },
      { src: "/lake-pocotopaug/3.jpg", alt: "alt", caption: "caption" },
      { src: "/lake-pocotopaug/4.jpg", alt: "alt", caption: "caption" },
      { src: "/lake-pocotopaug/5.jpg", alt: "alt", caption: "caption" },
      { src: "/lake-pocotopaug/6.jpg", alt: "alt", caption: "caption" },
    ],
  },
  {
    id: 2,
    slug: "vienna",
    title: "Vienna",
    location: "Vienna, Austria",
    description: "Soft morning light, grand facades, and quiet moments across Vienna.",
    coverSrc: "/vienna/1.jpg",
    photos: [
      { src: "/vienna/1.jpg", alt: "alt", caption: "caption" },
      { src: "/vienna/2.jpg", alt: "alt", caption: "caption" },
      { src: "/vienna/3.jpg", alt: "alt", caption: "caption" },
      { src: "/vienna/4.jpg", alt: "alt", caption: "caption" },
      { src: "/vienna/5.jpg", alt: "alt", caption: "caption" },
    ],
  },
  {
    id: 3,
    slug: "budapest",
    title: "Budapest",
    location: "Budapest, Hungary",
    description: "Street light, quiet corners, and the atmospheric details of Budapest Hungary.",
    coverSrc: "/budapest/1.jpg",
    photos: [
      { src: "/budapest/1.jpg", alt: "alt", caption: "caption" },
      { src: "/budapest/2.jpg", alt: "alt", caption: "caption" },
      { src: "/budapest/3.jpg", alt: "alt", caption: "caption" },
      { src: "/budapest/4.jpg", alt: "alt", caption: "caption" },
      { src: "/budapest/5.jpg", alt: "alt", caption: "caption" },
      { src: "/budapest/6.jpg", alt: "alt", caption: "caption" },
    ],
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((album) => album.slug === slug) || null;
}
