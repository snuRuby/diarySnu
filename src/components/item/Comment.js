import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";

const styles = theme => ({
  profile: {
    display: "flex"
  },
  profileImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  profileText: {
    padding: theme.spacing.unit
  },
  commentText: {
    padding: "0px 48px"
  }
});

const Comment = props => {
  const {
    classes,
    username,
    userId,
    imageUrl,
    text,
    timestamp,
    closeModal
  } = props;

  return (
    <React.Fragment>
      <div className={classes.profile}>
        <div className={classes.profileImage}>
          <Avatar src={imageUrl} />
        </div>
        <div className={classes.profileText}>
          <Link to={`/profile/${userId}`}>
            <div onClick={closeModal}>{username}</div>
          </Link>
          <Typography color="textSecondary">{timestamp}</Typography>
        </div>
      </div>
      <Typography className={classes.commentText}>{text}</Typography>
    </React.Fragment>
  );
};

export default withStyles(styles)(Comment);
