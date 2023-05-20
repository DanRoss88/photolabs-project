import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import UserProfile from "../components/UserProfile";
import PhotoFavButton from "../components/PhotoFavButton";
const PhotoDetailsModal = ({
  photos,
  selectedPhoto,
  closeModal,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  favouritePhotos,
}) => {
  console.log(selectedPhoto);
  const handleModalClose = () => {
    closeModal();
  };

  const handleFavouriteClick = (photo) => {
    if (isFavourite(photo)) {
      removeFromFavourites(photo);
    } else {
      addToFavourites(photo);
    }
  };

  const isPhotoFavourite = isFavourite(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={handleModalClose}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="photo-details-modal--images ">
        {selectedPhoto && (
          <>
            <PhotoFavButton
              photoId={selectedPhoto.id}
              isFavourite={isPhotoFavourite}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
              photo={selectedPhoto}
            />
            <img
              alt={`Photo ${selectedPhoto.id}`}
              src={selectedPhoto.urls.regular}
              key={selectedPhoto.id}
              id={selectedPhoto.id}
              className="photo-details-modal--image"
            />
            <div>
              <UserProfile
                photo={selectedPhoto}
                id={selectedPhoto.id}
                user={selectedPhoto.user}
                location={selectedPhoto.location}
              />
            </div>
          </>
        )}
      </div>

      <div className="photo-details-modal--header">
        <h3>Similar Photos</h3>
      </div>

      <div className="photo-details-modal--images">
        <div className="photo-list">
          <PhotoList
            photos={selectedPhoto.similar_photos}
            isFavourite={isFavourite}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            favouritePhotos={favouritePhotos}
            openModal={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
