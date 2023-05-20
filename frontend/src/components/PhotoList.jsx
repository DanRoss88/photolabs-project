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
  if (!photos || !Array.isArray(photos) || photos.length === 0) {
    return <p>No photos available.</p>;
  }

  const validPhotos = photos.filter(
    (photo) => photo && typeof photo === "object" && photo.id
  );

  return (
    <ul className="photo-list">
      {validPhotos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={isFavourite(photo)}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

export default PhotoList;
