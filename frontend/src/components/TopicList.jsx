import React from "react";
import "../styles/TopicListItem.scss";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics.json";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map((topic, index) => (
        <TopicListItem
          key={topic.id + "-" + index}
          id={topic.id}
          label={topic.title}
          link={`/topics/${topic.slug}`}
        />
      ))}
    </div>
  );
};

export default TopicList;
