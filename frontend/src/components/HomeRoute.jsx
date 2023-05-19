import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  openModal,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  favouritePhotos,
}) => {
  const favouriteCount = favouritePhotos.length;

  const favouritePhotoItems = favouritePhotos.map((photoID, index) => {
    const photo = photos.find((photo) => photo.id === photoID);
    const imageUrl = photo?.url;

    return (
      <div key={index} className="favourite-photo">
        <img src={imageUrl} alt="Favourite" />
      </div>
    );
  });

  return (
    <div className="home-route">
      <div className="nav-bar">
        <TopNavigation
          favouriteCount={favouriteCount}
          isFavPhotoExist={favouriteCount > 0}
        />
      </div>
      <div className="favourite-photos">
        {favouriteCount === 0 ? (
          <p>No favourite photos</p>
        ) : (
          <p>
            {favouriteCount} favourite photo{favouriteCount > 1 ? "s" : ""}
          </p>
        )}
        {favouritePhotoItems}
      </div>
      <div className="photo-list">
        <PhotoList
          openModal={openModal}
          photos={photos}
          isFavourite={isFavourite}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
