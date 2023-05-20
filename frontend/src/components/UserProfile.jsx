import React from "react";
import "../styles/PhotoListItem.scss";

const UserProfile = ({ photo }) => {
  const { user } = photo;
  const { username } = user;
  const { city, country } = photo.location;
  const { profile } = user;

  return (
    <div className="photo-list--user-details">
      <img
        className="photo-list--user-profile"
        src={profile}
        alt={`Profile of ${username}`}
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