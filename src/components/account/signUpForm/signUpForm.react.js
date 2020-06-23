import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  title: {
    marginTop: theme.spacing.unit * 2
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit
  }
});

const signUpForm = ({
  onSubmit,
  handleChange,
  onKeyPress,
  classes,
  inputError,
  error,
  username,
  password,
  password2,
  email
}) => {
  return (
    <div className={classes.main} onKeyPress={onKeyPress}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
          회원 가입
        </Typography>
        <form className={classes.form}>
          <FormControl margin="dense" required fullWidth>
            <InputLabel htmlFor="id">유저 아이디</InputLabel>
            <Input
              id="id"
              name="username"
              onChange={handleChange}
              autoFocus
              value={username}
            />
            <Typography component="p" color="default">
              영어, 숫자 그리고 5개의 특수 기호(@/./+/-/_)를 포함한 150자 이하의
              이름만이 등록 가능합니다.
            </Typography>
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <InputLabel htmlFor="email">이메일 주소</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
            <Typography component="p" color="textPrimary">
              해당 이메일 주소로 인증 메일이 전송됩니다.
              <br /> 인증 이후 원활한 서비스 이용이 가능합니다.
            </Typography>
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <InputLabel htmlFor="password2">비밀번호 재입력</InputLabel>
            <Input
              type="password"
              id="password2"
              name="password2"
              onChange={handleChange}
              value={password2}
            />
            <Typography component="p" color="default">
              동일한 비밀번호를 입력해주세요.
            </Typography>
          </FormControl>
          {inputError ? (
            <Typography component="h5" color="error">
              {inputError}
            </Typography>
          ) : null}
          {error ? (
            <Typography component="h5" color="error">
              {error}
            </Typography>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
            className={classes.button}
          >
            등록
          </Button>
        </form>
      </Paper>
    </div>
  );
};

signUpForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(signUpForm);
