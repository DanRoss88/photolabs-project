import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

function PhotoList({
  openModal,
  photos,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
}) {
  if (!photos) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={isFavourite(photo)}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
          openModal={openModal}
          user={photo.user}
        />
      ))}
    </ul>
  );
}

export default PhotoList;
