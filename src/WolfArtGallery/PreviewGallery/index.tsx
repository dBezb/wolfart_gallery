import { Photo, CommonClassProps } from "../types";
import cl from "classnames";
import style from "./index.module.scss";

interface PreviewGalleryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Photo[];
}
export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  activePhotoIndex,
  photos,
  className,
}) => (
  <div className={cl(style.previewGallery, className)}>
    <ul className={style.previewGalleryTrack}>
      {photos.map((photo) => (
        <li key={photo.id} className={style.previewGalleryPreview}>
          <img
            src={photo.preview}
            alt={photo.description}
            className={style.previewGalleryImage}
          />
        </li>
      ))}
    </ul>
    <div className={style.previewGalleryCover}>
      {activePhotoIndex + 1} / {photos.length}
    </div>
  </div>
);
