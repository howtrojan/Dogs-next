import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import css from "./feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <h1>Feed</h1>
      <ul className={`${css.feed} animeLeft`}>
        {photos.map((photo: Photo, i) => (
          <li className={css.photo} key={photo.id + i}>
            <Link href={`/foto/${photo.id}`} scroll={false}>
              <Image
                src={photo.src}
                alt={photo.title}
                width={1500}
                height={1500}
                sizes="80vw"
              ></Image>
              <span className={css.visualizacao}>{photo.acessos}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
