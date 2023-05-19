import React, { useState } from "react";
import photos from "../mocks/photos.json";



export default function useApplicationData() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const openModal = async (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    const similarPhotos = await getSimilarPhotos(photo);
    setSimilarPhotos(similarPhotos);
  };

  const getSimilarPhotos = async (photo) => {
    const allPhotos = photos;
    const similarPhotos = allPhotos.filter(
      (p) => p.category === photo.category && p.id !== photo.id
    );
    return similarPhotos;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  };

  const isFavourite = (photo) => {
    if (!photo) {
      return false;
    }
    return favouritePhotos.some((fav) => fav.id === photo.id);
  };

  const addToFavourites = (photo) => {
    setFavouritePhotos([...favouritePhotos, photo]);
  };

  const removeFromFavourites = (photo) => {
    const updatedFavourites = favouritePhotos.filter(
      (fav) => fav.id !== photo.id
    );
    setFavouritePhotos(updatedFavourites);
  };

  return {
    isModalOpen,
    selectedPhoto,
    similarPhotos,
    favouritePhotos,
    openModal,
    closeModal,
    isFavourite,
    addToFavourites,
    removeFromFavourites,
  };
}


