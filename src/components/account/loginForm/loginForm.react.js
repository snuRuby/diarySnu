import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    display: "flex",
    maxWidth: 800,
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  avatar: {
    margin: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit
  }
});

const loginForm = ({
  onSubmit,
  handleChange,
  handlePageChange,
  onKeyPress,
  classes,
  error,
  onCloseModal
}) => {
  return (
    <Paper style={getModalStyle()} className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        mkdir.
      </Typography>
      <form className={classes.form}>
        <FormControl margin="dense" required fullWidth>
          <InputLabel htmlFor="id">유저 아이디</InputLabel>
          <Input
            id="id"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="dense" required fullWidth>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            onKeyPress={onKeyPress}
          />
        </FormControl>
        {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
        {error ? (
          <Typography component="h5" color="error">
            로그인에 실패했습니다.
          </Typography>
        ) : null}
        <Button
          onClick={onSubmit}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          로그인
        </Button>
        <Button
          onClick={() => {
            handlePageChange();
            onCloseModal();
          }}
          type="submit"
          fullWidth
          variant="contained"
          color="default"
        >
          회원 가입
        </Button>
      </form>
    </Paper>
  );
};

loginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(loginForm);
