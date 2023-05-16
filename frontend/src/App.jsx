import React from "react";
import "./styles/PhotoList.scss";
import "./styles/TopicList.scss"
import PhotoList from "./components/PhotoList";
import "./App.scss";
import TopicList from "./components/TopicList";

const App = () => {
  

  return (
    <div className="App">
      <div className="topic-list">
      <TopicList />
      </div>
      <div className="photo-list">
        <PhotoList />
        <PhotoList />
        <PhotoList />
      </div>
    </div>
  );
};

export default App;
