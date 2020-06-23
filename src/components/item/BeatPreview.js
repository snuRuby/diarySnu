import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    position: "relative",
    margin: "0.5rem",
    minHeight: 200,
    maxHeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    border: "1px solid black",
    "& img": {
      position: "relative",
      pointerEvents: "none",
      height: "100%",
      opacity: 1,
      transition: "opacity .5s ease-in",
      ["-moz-transition"]: "opacity .5s ease-in",
      ["-webkit-transition"]: "opacity .5s ease-in",
      ["-o-transition"]: "opacity .5s ease-in"
    },
    "&:hover": {
      "& img": {
        opacity: 0.1,
        transition: "opacity .5s ease-out",
        ["-moz-transition"]: "opacity .5s ease-out",
        ["-webkit-transition"]: "opacity .5s ease-out",
        ["-o-transition"]: "opacity .5s ease-out"
      }
    }
  },
  beatInfo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  title: {
    margin: theme.spacing.unit,
    fontSize: 24,
    fontWeigiht: 600
  },
  summary: {
    margin: theme.spacing.unit,
    fontSize: 18
  },
  tagList: {
    margin: theme.spacing.unit,
    fontSize: 14,
    fontStyle: "Italic",
    color: "grey"
  },
  tag: {
    display: "block",
    marginBottom: theme.spacing.unit,
    textDecoration: "inherit",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

const BeatPreview = props => {
  const { classes, id, title, imageUrl, tags, summary, onClick } = props;

  const tagList = tags.map(tag => (
    <Link className={classes.tag} key={tag} to={`/tag/${tag}`}>
      #{tag}
    </Link>
  ));

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={classes.root} onClick={onClick}>
        <div className={classes.beatInfo}>
          <Grid container spacing={16}>
            <Grid item xs={12} className={classes.title}>
              {title}
            </Grid>
            <Grid item xs={12} className={classes.summary}>
              {summary}
            </Grid>
            <Grid item xs={12} className={classes.tagList}>
              {tagList}
            </Grid>
          </Grid>
        </div>
        <img src={imageUrl} alt="beat thumbnail" />
      </div>
    </Grid>
  );
};

export default withStyles(styles)(BeatPreview);
