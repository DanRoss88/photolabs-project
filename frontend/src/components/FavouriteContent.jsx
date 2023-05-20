import React, {  useReducer } from "react";
import "../styles/FavouriteContent.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";

const FavouriteContent = ({
favouritePhotos,
photos,
favouriteCount
}) => {


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
 
  <div className="favourite-content-list">
    <div className="favourite-content--item">
      {favouriteCount === 0 ? (
        <span>No Favourite Photos</span>
      ) : (
        <span>
          {favouriteCount} Favourite Photo{favouriteCount > 1 ? "s" : ""}
        </span>
        
      )}
       </div>
       <div className="favourite-photos">
      {/* {favouritePhotoItems} */}
  </div> </div>
) ;
}


export default FavouriteContent;