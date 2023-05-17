import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import photos from "../mocks/photos.json";

const PhotoListItem = (props) => {
  const { id, username, hideUserName } = props;
  const photo = photos.find((photo) => photo.id === id);

  if (!photo) {
    return null;
  }
  const { urls } = photo;
  return (
    <article className="photo-list--item">
      {hideUserName ? null : username}
      <PhotoFavButton />
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
