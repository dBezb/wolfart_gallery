import { Photo } from "./types";
import { MainPhoto } from "./MainPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";
import style from "./index.module.scss";
import { useState } from "react";

interface WolfArtGalleryProps {
  photos: Photo[];
}

export const WolfArtGallery: React.FC<WolfArtGalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.wolfArtGallery}>
      <div className={style.wolfArtGalleryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          className={style.wolfArtMainPhoto}
        />
        <Navigation
          className={style.wolfArtNavigation}
          disabledPrev={!prevPhoto}
          disableNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.wolfArtPreviewList}
      />
    </div>
  );
};
