import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos.json";

const PhotoList = (props) => {
  const displayPhotos = new Array(3).fill(null);

  return (
    <ul className="photo-list">
      {displayPhotos.map((_, index) => (
        <PhotoListItem
          key={index + 1}
          username={photos[index]?.user.username || ""}
          id={photos[index]?.id || ""}
          hideUserName={false}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
