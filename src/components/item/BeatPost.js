import React from "react";

import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import CommentList from "../list/CommentList";

const styles = theme => ({
  paper: {
    position: "absolute",
    display: "flex",
    maxWidth: 900,
    marginTop: theme.spacing.unit,
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  image: {
    width: "100%",
    height: "100%"
  },
  avatar: {
    margin: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit
  }
});

const BeatPost = props => {
  const { classes, beat, closeModal } = props;
  console.log(beat);
  const commentList = [
    {
      username: "박 찬",
      userId: "parkchan",
      imageUrl: "/images/background-dummy.jpg",
      text: "비트 너무 좋아요",
      timestamp: "2018. 12. 08. 9:03 PM"
    },
    {
      username: "김형주",
      userId: "ANGLBOY",
      imageUrl: "/images/background-dummy.jpg",
      text: "비트 너무 구린데?",
      timestamp: "2018. 12. 08. 9:43 PM"
    }
  ];
  if (!beat) return null;
  console.log(beat);
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={16} className={classes.rootContainer}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" align="center">
            {beat.title}
          </Typography>
          <Divider className="divider" variant="middle" />
        </Grid>
        <Grid item xs={4}>
          <img
            className={classes.image}
            src="/images/cover-4-dummy.jpg"
            alt="background"
          />
        </Grid>

        <Grid container item xs={8}>
          <Grid item xs={4}>
            <div className="section-title">Genre</div>
            <div className="section-content">#Boombap</div>
          </Grid>
          <Grid item xs={4}>
            <div className="section-title">Mood</div>
            <div className="section-content">#Joyful #Funky</div>
          </Grid>
          <Grid item xs={4}>
            <div className="section-title">BPM</div>
            <div className="section-content">140</div>
          </Grid>
          <Grid item xs={4}>
            <div className="section-title">Artist</div>
            <div className="section-content">{beat.author}</div>
          </Grid>
          <Grid item xs={4}>
            <div className="section-title">Date</div>
            <div className="section-content">2018.12.16</div>
          </Grid>
          <Grid item xs={4}>
            <div className="section-title">Played</div>
            <div className="section-content">134</div>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="flex-end"
          alignItems="flex-end"
          spacing={16}
        >
          <Grid item>
            <Button variant="outlined" color="primary" size="small">
              {" "}
              지금 재생{" "}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" size="small">
              {" "}
              재생 목록에 추가
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" size="small">
              {" "}
              바로 구매{" "}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth>
            {" "}
            Standard License <br /> $10
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth>
            {" "}
            Premium License <br /> $50
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth disabled>
            {" "}
            Limited License <br /> x
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom className="description">
            {beat.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          Likes
        </Grid>
        <Grid item xs={12}>
          <Typography>Comments</Typography>
          <CommentList closeModal={closeModal} comments={commentList} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(BeatPost);
