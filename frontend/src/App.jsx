import React from "react";
import "./styles/PhotoList.scss"
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
  const photos = new Array(3).fill(null);

  return (
    <div className="App">
      <div className="photo-list">
        {photos.map((_, index) => (
          <PhotoListItem
            key={index + 1}
            username=""
            imageSource={`${process.env.PUBLIC_URL}/Image.jpg`}
            id={index + 1}
            hideUserName={false}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
