import React from "react";
import "./App.scss";
import "./styles/HomeRoute.scss";
import HomeRoute from "./components/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";
import topics from "./mocks/topics.json";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos.json"

const App = () => {
const {
  isModalOpen,
  selectedPhoto,
  similarPhotos,
  favouritePhotos,
  openModal,
  closeModal,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        closeModal={closeModal}
        isFavourite={isFavourite}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        favouritePhotos={favouritePhotos}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          similarPhotos={similarPhotos}
          closeModal={closeModal}
          isFavourite={isFavourite}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
          favouritePhotos={favouritePhotos}
        />
      )}
    </div>
  );
};

export default App;
