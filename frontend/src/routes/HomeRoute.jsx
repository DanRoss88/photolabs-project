import React, { useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  openModal,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  favouritePhotos,
  handleTopicClick,
}) => {
  const favouriteCount = favouritePhotos.length;

  return (
    <div className="home-route">
      <div className="nav-bar">
        <TopNavigation
          topics={topics}
          favouriteCount={favouriteCount}
          isFavPhotoExist={favouriteCount > 0}
          favouritePhotos={favouritePhotos}
          photos={photos}
          handleTopicClick={handleTopicClick}
        />
      </div>

      <div className="photo-list">
        {photos ? (
          <PhotoList
            openModal={openModal}
            photos={photos}
            isFavourite={isFavourite}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default HomeRoute;
