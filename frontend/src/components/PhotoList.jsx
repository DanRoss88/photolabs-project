import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const photos = new Array(3).fill(null);
  
  return (
  <ul className="photo-list">
    {photos.map((_, index) => (
    <PhotoListItem
      key={index + 1}
      username=""
      imageSource={`${process.env.PUBLIC_URL}/Image.jpg`}
      id={index + 1}
      hideUserName={false}
    />
  ))}
</ul>
 ) 
}

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList