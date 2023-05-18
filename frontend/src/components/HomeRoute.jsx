import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const addToFavourites = (photoID) => {
    if (!favouritePhotos.includes(photoID)) {
      setFavouritePhotos([...favouritePhotos, photoID]);
    }
  };

  const removeFromFavourites = (photoID) => {
    if (favouritePhotos.includes(photoID)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoID));
    }
  };

  const isFavourite = (photoID) => {
    return favouritePhotos.includes(photoID);
  };

  const favouriteCount = favouritePhotos.length;

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
        {favouritePhotos.map((photoID) => (
          <div key={photoID} className="favourite-photo">
            <img
              src={photos.find((photo) => photo.id === photoID)?.url}
              alt="Favourite"
            />
          </div>
        ))}
      </div>
      <div className="photo-list">
        <PhotoList
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