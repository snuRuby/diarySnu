import React from "react";

import { Grid } from "@material-ui/core";

import Comment from "../item/Comment";

const CommentList = ({ comments, closeModal }) => {
  const commentList = comments
    ? comments.map((c, i) => (
        <Grid key={`comment-${i}`} item xs={12}>
          <Comment
            username={c.username}
            userId={c.userId}
            imageUrl={c.imageUrl}
            text={c.text}
            timestamp={c.timestamp}
            closeModal={closeModal}
          />
        </Grid>
      ))
    : null;
  return (
    <Grid container spacing={16}>
      {commentList}
    </Grid>
  );
};

export default CommentList;
