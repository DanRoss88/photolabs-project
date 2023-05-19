import React from "react";
import FavBadge from "./FavBadge";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  photo,
}) => {
  const handleFavIconClick = () => {
    if (isFavourite) {
      removeFromFavourites(photo);
    } else {
      addToFavourites(photo);
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
