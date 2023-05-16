import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss"
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <article className="photo-list--item">
      {props.hideUserName === true && props.username}
      <PhotoFavButton />
      <img
        alt={`Photo ${props.id}`}
        className="photo-list--image"
        src={props.imageSource}
        key={props.id}
      />
    </article>
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
