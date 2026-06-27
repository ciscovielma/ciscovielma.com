import { notFound } from "next/navigation";

import { getAlbumBySlug } from "../album-data";
import AlbumViewer from "../AlbumViewer";

type AlbumPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return <AlbumViewer album={album} />;
}
