import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoListItem from "../components/PhotoListItem";
import PhotoList from "../components/PhotoList";

const PhotoDetailsModal = ({
  selectedPhoto,
  similarPhotos,
  closeModal,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  favouritePhotos,
}) => {
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

      <div className="photo-details-modal--image top-modal-photo ">
        {selectedPhoto && (
          <PhotoListItem
            key={selectedPhoto.id}
            photo={selectedPhoto}
            isFavourite={isPhotoFavourite}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            favouritePhotos={favouritePhotos}
          />
        )}
      </div>

      <div className="photo-details">
        <h2>{selectedPhoto.title}</h2>
        <p>{selectedPhoto.description}</p>
      </div>

      <div className="photo-details-modal--header">
        <h3>Similar Photos</h3>
      </div>

      <div className="photo-details-modal--images">
        <div className="photo-list">
          <PhotoList
            photos={similarPhotos}
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
