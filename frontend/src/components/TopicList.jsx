import React from 'react';
import '../styles/TopicListItem.scss';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const { topics } = TopicList.defaultProps;

  
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} id={topic.id} label={topic.label} href={topic.link} />
      ))}
    </div>
  );
      }

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder' 
    },
    { 
      id: 2, 
      label: 'Food',
      link: 'link placeholder' 
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder' 
    },
  ]
}
export default TopicList