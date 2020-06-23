import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

// import './Footer.css';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(30,30,30)",
    color: "white"
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "row",
    textAlign: "center"
  },
  brand: {
    fontSize: 30,
    fontWeight: 600,
    margin: "auto",
    color: "white",
    height: "fit-content",
    width: "fit-content",
    flex: 1
  },
  citemap: {
    marginTop: theme.spacing.unit * 1,
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 5,
    flex: 3,
    display: "flex"
  },
  columnWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& a": {
      marginTop: theme.spacing.unit * 2
    }
  },
  title: {
    fontSize: 15
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.default,
    marginRight: theme.spacing.unit,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150
  }
});

const Item = ({ to, className, content, src, alt }) => {
  return (
    <Link to={to} className={className}>
      {/* src값을 갖고 있는지에 따라서 조건부 rendering */}
      {src ? <img className={"app-image"} src={src} alt={alt} /> : `${content}`}
    </Link>
  );
};

const LANGUAGES = [
  {
    code: "kr-KR",
    name: "한국어"
  },
  {
    code: "en-US",
    name: "English"
  }
];

const Footer = props => {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <div className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={12} sm={12} md={12}>
            Section
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}
            >
              <Grid item className={classes.brand}>
                <Link to="/">mkdir</Link>
              </Grid>
              <Grid item className={classes.icons} />
              <Grid item>© 2018 mkdir</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem} />
              <li className={classes.listItem} />
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            mkdir
          </Grid>
        </Grid>
      </div>
    </Typography>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
