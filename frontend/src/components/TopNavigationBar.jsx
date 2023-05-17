import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import '../styles/FavBadge.scss'
import TopicList from './TopicList';
import "../styles/TopicList.scss"


const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <div className='top-nav-bar--topic-list'><TopicList /></div>
      <FavBadge />
    
    </div>
    
      
   
  )
}

export default TopNavigation;