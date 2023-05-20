import React, { useEffect, useState } from "react";
import "./App.scss";
import "./styles/HomeRoute.scss";
import HomeRoute from "./routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";

import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const { similarPhotos: applicationSimilarPhotos } = useApplicationData({
    photos,
    topics,
  });

  const handleTopicClick = (topicId) => {
    if (topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) => {
          setPhotos(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  useEffect(() => {
    handleTopicClick();
  }, []);

  const {
    isModalOpen,
    selectedPhoto,
    favouritePhotos,
    openModal,
    closeModal,
    isFavourite,
    addToFavourites,
    removeFromFavourites,
    similarPhotos,
  } = useApplicationData({ photos, topics });

  return (
    <div className="App">
      <HomeRoute
        handleTopicClick={handleTopicClick}
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
          photos={photos}
          selectedPhoto={selectedPhoto}
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
