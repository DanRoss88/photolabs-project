import React from "react";
import "./App.scss";
import "./styles/HomeRoute.scss"
import HomeRoute from "./components/HomeRoute";
import photos from "./mocks/photos.json"
import topics from "./mocks/topics.json"

const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
