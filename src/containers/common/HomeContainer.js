import React from "react";

import { withStyles, Grid, Hidden, Typography, Paper } from "@material-ui/core";

import HeaderContainer from "containers/common/HeaderContainer";
import Footer from "components/common/Footer";
import SearchBar from "../../components/common/SearchBar";

let imgUrl = "/images/background_home_1.jpeg";
const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  box: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingBottom: "56.25%",
    background: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  searchBar: {
    textAlign: "center",
    color: "white",
    margin: "auto",
    paddingTop: theme.spacing.unit * 4
  },
  slogan: {
    textAlign: "center",
    color: "white",
    paddingTop: theme.spacing.unit * 6,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing.unit * 4
    }
  }
});

class HomeContainer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <HeaderContainer />
        <main className={classes.main}>
          <Paper className={classes.box}>
            <Grid container spacing={0} className={classes.container}>
              <Grid item xs={10} className={classes.searchBar}>
                <Grid container spacing={40}>
                  <Grid item xs={12} className={classes.searchBar}>
                    <Typography variant="h5" color="inherit">
                      다이브 검색
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.searchBar}>
                    <SearchBar
                      style={{
                        margin: "0 auto",
                        maxWidth: 800
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.slogan}>
                    <Typography variant="h5" color="inherit">
                      Alway Be Divin'
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(HomeContainer);
