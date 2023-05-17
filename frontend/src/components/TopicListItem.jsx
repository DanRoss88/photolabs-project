import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list--item">
      <a key={props.id} id={props.id} label={props.label} href={props.link}>
        <span>{props.label}</span>
      </a>
    </div>
  );
};

TopicListItem.defaultProps = {
  id: 1,
  label: "Nature",
  link: "link placeholder",
};
export default TopicListItem;
