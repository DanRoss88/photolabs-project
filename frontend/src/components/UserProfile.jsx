import React from "react";
import "../styles/PhotoListItem.scss";

const UserProfile = ({ photo }) => {
  const { username, portfolio_url } = photo.user;
  const { city, country } = photo.location || {};

  return (
    <div className="photo-list--user-details">
      <img
        className="photo-list--user-profile"
        src={`profile-1.jpg`}
        alt={`profile `}
      />

      <div className="photo-list--user-info">
        {username}

        <div className="photo-list--user-location">
          {city}, {country}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
