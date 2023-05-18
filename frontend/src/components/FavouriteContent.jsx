// import React, {  useReducer } from "react";

// import "../styles/FavouriteContent.scss";
// import "../styles/PhotoFavButton.scss";
// import PhotoFavButton from "./PhotoFavButton";

// const initialState = {
//   favouritePhotos: [],
//   favouriteCount: 0,
//   isFavPhotoExist: false
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_FAVE_PHOTO":
//       return {
//         ...state,
//         favouritePhotos: [...state.favouritePhotos, action.payload],
//         favouriteCount: state.favouriteCount + 1,
//         isFavPhotoExist: true 
//       };
//     case "RMV_FAVE_PHOTO":
//       return {
//         ...state,
//         favouritePhotos: state.favouritePhotos.filter(
//           (photoID) => photoID !== action.payload
//         ),
//         favouriteCount: state.favouriteCount - 1,
//         isFavPhotoExist: false
//       };
//     default:
//       return state;
//   }
// };



// const FavouriteContent = ({photos}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addToFavourites = (photoID) => {
//     dispatch({ type: "ADD_FAVE_PHOTO", payload: photoID });
//   };
  
//   const removeFromFavourites = (photoID) => {
//     dispatch({ type: "RMV_FAVE_PHOTO", payload: photoID });
//   };

//   const isFavourite = (photoID) => {
//     return state.favouritePhotos.includes(photoID);
//   };

//   const { favouritePhotos, favouriteCount } = state;

//   return (
   
    
//       <div className="favourite-photos">
//         {favouriteCount === 0 ? (
//           <p>No favourite photos</p>
//         ) : (
//           <p>
//             {favouriteCount} favourite photo{favouriteCount > 1 ? "s" : ""}
//           </p>
//         )}
//         {favouritePhotos.map((photoID) => (
//           <div key={photoID} className="favourite-photo">
//             <img src={photos.find((photo) => photo.id === photoID.url)?.url} alt="Favourite" />
//           </div>
//         ))}
//       </div>
  
//   );
// };

// export default FavouriteContent;
