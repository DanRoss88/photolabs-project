import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";

const TopNavigation = ({ favouriteCount }) => {
  const displayAlert = favouriteCount > 0;
  const fill = "#C80000";
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <div className="top-nav-bar--topic-list">
        <TopicList />
      </div>
      <div className="top-nav-bar--badge">
        {<FavIcon fill={fill} displayAlert={displayAlert} />}
      </div>
    </div>
  );
};

export default TopNavigation;
