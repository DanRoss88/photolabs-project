import React, { useCallback, useState } from "react";
import FavBadge from "./FavBadge";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [isFavourited, setFavourited] = useState(false);

  const handleFavIconClick = () => {
    console.log("click");
    setFavourited(!isFavourited);
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleFavIconClick}>
      {isFavourited ? (
        <FavBadge className="photo-list--fav-icon-svg" />
      ) : (
        <FavIcon className="photo-list--fav-icon-svg" />
      )}
    </div>
  );
};

export default PhotoFavButton;
