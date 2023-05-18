import React from "react";
import FavBadge from "./FavBadge";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({
  photoId,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  updateFavoriteCount,
}) => {
  const handleFavIconClick = () => {
    if (isFavourite) {
      removeFromFavourites(photoId);
      updateFavoriteCount(-1);
    } else {
      addToFavourites(photoId);
      updateFavoriteCount(1);
    }
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleFavIconClick}>
      {isFavourite ? (
        <FavBadge className="photo-list--fav-icon-svg" />
      ) : (
        <FavIcon className="photo-list--fav-icon-svg" />
      )}
    </div>
  );
};

export default PhotoFavButton;
