import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, addToFavourites, removeFromFavourites }) => {
  const { id, username, urls } = photo;

  return (
    <article className="photo-list--item">
      <span>{username}</span>
      <PhotoFavButton
        photoId={id}
        isFavourite={isFavourite}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
      <img
        alt={`Photo ${id}`}
        className="photo-list--image"
        src={urls.regular}
        key={id}
      />
    </article>
  );
};

export default PhotoListItem;