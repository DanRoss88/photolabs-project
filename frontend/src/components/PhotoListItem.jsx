import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import UserProfile from "./UserProfile";

const PhotoListItem = ({
  openModal,
  photo,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
}) => {
  const { id, user, urls } = photo;

  const handleOpenModal = () => {
    const parentModal = document.querySelector(".photo-details-modal");
    if (!parentModal) {
      openModal(photo);
    }
  };
  return (
    <div className="photo-list--item">
      <article>
        <PhotoFavButton
          photoId={id}
          isFavourite={isFavourite}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
          photo={photo}
        />
        <img
          alt={`Photo ${id}`}
          src={urls.regular}
          key={id + 1}
          id={id}
          className="photo-list--image"
          onClick={handleOpenModal}
        />
      <div >
      
        <UserProfile photo={photo} id={id} user={user} location={location} />
      
      </div>
      </article>
    </div>
  );
};

export default PhotoListItem;
