import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @material-ui/core
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

const styles = theme => ({
  appbar: {
    color: theme.palette.common.black,
    background: "rgba(255,255,255,0.5)",
    height: 78,
    display: "flex",
    justifyContent: "center",
    borderBottom: "1.2px solid black"
  },
  placeholder: {
    height: 78
  },
  toolbar: {
    width: "100%",
    position: "relative"
  },
  title: {
    fontSize: 30,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 1,
    [theme.breakpoints.up("md")]: {
      alignSelf: "flex-end",
      marginBottom: theme.spacing.unit * 1,
      marginLeft: theme.spacing.unit * 3
    }
  },
  link: {
    alignSelf: "flex-end",
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3
  },
  right: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "auto",
      marginBottom: theme.spacing.unit * 2
    },
    display: "flex"
  },
  rightLink: {
    alignSelf: "flex-end",
    color: theme.palette.common.black,
    marginRight: theme.spacing.unit * 3
  }
});

function Header({
  classes,
  logged,
  username,
  loading,
  error,
  onClickLogin,
  onLogout,
  onMenuClick
}) {
  return (
    <div>
      <AppBar elevation={0} position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.title}>
            <Typography variant="h4" color="inherit">
              {`BΞATIFUL`}
            </Typography>
          </Link>
          <Hidden smDown>
            <Link className={classes.link} to="/genre">
              장르
            </Link>
            <Link className={classes.link} to="/mood">
              무드
            </Link>
            <Link className={classes.link} to="/notice">
              공지사항
            </Link>
            <div className={classes.right}>
              {logged ? (
                <div>
                  {/* 프로필 닉네임을 누른 경우 /profile/유저닉네임 으로 이동하도록 했는데, 유저닉네임을 쓸지 DB내의 고유 id를 사용할지 논의해야함 */}
                  <Link className="right_item" to={"/profile/" + username}>
                    {username}
                  </Link>
                  <span className="right_item" onClick={onLogout}>
                    로그아웃
                  </span>
                </div>
              ) : (
                <span className={classes.rightLink} onClick={onClickLogin}>
                  로그인
                </span>
              )}
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.right}>
              <IconButton color="inherit" onClick={onMenuClick}>
                <Menu />
              </IconButton>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
