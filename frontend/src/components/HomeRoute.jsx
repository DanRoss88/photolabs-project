import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
const HomeRoute = () => {
  
  return (
    <div className="home-route">
      <TopNavigation />
      <div className="photo-list">
        <PhotoList />
        <PhotoList />
        <PhotoList />
      </div>
    </div>
  );
};

export default HomeRoute;
