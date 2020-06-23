import React from "react";
import { Link } from "react-router-dom";

import "./PostList.css";

const PostItem = ({ imageUrl, title, publishedDate, tags, id }) => {
  const tagList = tags.map(tag => (
    <Link key={tag} to={`/tag/${tag}`}>
      #{tag}
    </Link>
  ));

  return (
    <div className="postitem_wrapper">
      <img src={imageUrl} alt={`post${id}`} />
      <h2>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <div className="date">{publishedDate}</div>
      <div className="tags">{tagList}</div>
    </div>
  );
};

const PostList = () => {
  return (
    <div className="postlist_wrapper">
      <PostItem
        imageUrl="/images/dummy-1.jpg"
        title="test"
        publishedDate="오늘"
        tags={["탕수육", "찍먹", "중국음식"]}
        id="1"
      />
      <PostItem
        imageUrl="/images/dummy-1.jpg"
        title="test"
        publishedDate="오늘"
        tags={["탕수육", "찍먹", "중국음식"]}
        id="1"
      />
    </div>
  );
};

export default PostList;
