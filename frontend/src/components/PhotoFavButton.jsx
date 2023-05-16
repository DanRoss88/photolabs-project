import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavourited, setFavourited] = useState(false);

  const handleFavIconClick = useCallback(() => {
    setFavourited((prevState) => !prevState);
  }, [isFavourited]);
  return (
    <div className="photo-list--fav-icon">
      <FavIcon className='photo-list--fav-icon-svg' filled={isFavourited} onClick={handleFavIconClick} />
    </div>
  );
}

export default PhotoFavButton;
