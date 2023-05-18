import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, isFavourite, addToFavourites, removeFromFavourites }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={isFavourite(photo.id)}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      ))}
    </ul>
  );
};

export default PhotoList;