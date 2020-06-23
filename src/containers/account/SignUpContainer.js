import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { isEmail } from "validator";

import * as accountsActions from "store/modules/accounts";
import * as api from "lib/api";
import SignUpForm from "components/account/signUpForm";

class SignUpContainer extends Component {
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
  };
  handleChange = e => {
    const { AccountsActions } = this.props;
    AccountsActions.changeRegInput({
      type: e.target.name,
      value: e.target.value
    });
  };
  onSubmit = async () => {
    const {
      username,
      password,
      password2,
      email,
      AccountsActions
    } = this.props;
    if (!(username && password && password2 && email)) {
      return AccountsActions.regInputError({
        error: "모든 양식을 채워주십시오."
      });
    }
    if (username.length > 150) {
      return AccountsActions.regInputError({
        error: "유저 이름이 너무 깁니다."
      });
    }
    if (password !== password2) {
      return AccountsActions.regInputError({
        error: "두 패스워드가 일치하지 않습니다."
      });
    }
    if (password.length < 8) {
      return AccountsActions.regInputError({
        error: "패스워드는 8자리 이상이어야 합니다."
      });
    }
    if (!isEmail(email)) {
      return AccountsActions.regInputError({
        error: "이메일 양식이 유효하지 않습니다."
      });
    }
    AccountsActions.registerBegin();
    try {
      const response = await api.registerUser({ username, password, email });
      console.log(response);
      if (response.status === 201) {
        return AccountsActions.registerSuccess(response.data);
      }
      return AccountsActions.registerFailure(response.data["error"]);
    } catch (e) {
      console.log(e);
      const error = { error: e.message };
      return AccountsActions.registerFailure(error);
    }
  };

  render() {
    const { handleChange, onSubmit, onKeyPress } = this;
    const {
      inputError,
      error,
      loading,
      redirect,
      username,
      password,
      password2,
      email
    } = this.props;
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (loading) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <SignUpForm
          username={username}
          password={password}
          password2={password2}
          email={email}
          onSubmit={onSubmit}
          onKeyPress={onKeyPress}
          error={error}
          inputError={inputError}
          handleChange={handleChange}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.accounts.getIn(["register", "loading"]),
    username: state.accounts.getIn(["register", "username"]),
    password: state.accounts.getIn(["register", "password"]),
    password2: state.accounts.getIn(["register", "password2"]),
    email: state.accounts.getIn(["register", "email"]),
    inputError: state.accounts.getIn(["register", "inputError"]),
    error: state.accounts.getIn(["register", "error"]),
    redirect: state.accounts.get("redirect")
  }),
  dispatch => ({
    AccountsActions: bindActionCreators(accountsActions, dispatch)
  })
)(SignUpContainer);
