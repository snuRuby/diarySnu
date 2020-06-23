import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

import * as api from "lib/api";
import * as accountsActions from "store/modules/accounts";
import * as baseActions from "store/modules/base";
import LoginForm from "components/account/loginForm";

class LoginContainer extends Component {
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
  };
  handleChange = e => {
    const { AccountsActions } = this.props;
    AccountsActions.changeLoginInput({
      type: e.target.name,
      value: e.target.value
    });
  };
  handlePageChange = () => {
    this.props.history.push("/signup");
  };
  onSubmit = async () => {
    const { username, password, AccountsActions, BaseActions } = this.props;
    BaseActions.showLoading();
    AccountsActions.loginBegin();
    BaseActions.hideModal("login");
    try {
      const response = await api.login({ username, password });
      BaseActions.hideLoading();
      if (response.status === 200) {
        return AccountsActions.loginSuccess(response.data);
      }
      return AccountsActions.loginFailure(response.data["error"]); // TODO: collab. needed with server side
    } catch (e) {
      const error = { error: e.message };
      BaseActions.hideLoading();
      AccountsActions.loginFailure(error);
    }
  };

  render() {
    const { handleChange, handlePageChange, onSubmit, onKeyPress } = this;
    const { loading, error, redirect, logged, onClose } = this.props;
    if (redirect || logged) {
      return <Redirect to="/" />;
    }
    if (loading) {
      return <div>loading...</div>;
    }
    return (
      <LoginForm
        onSubmit={onSubmit}
        onKeyPress={onKeyPress}
        handleChange={handleChange}
        handlePageChange={handlePageChange}
        onCloseModal={onClose}
        error={error}
      />
    );
  }
}

export default connect(
  state => ({
    username: state.accounts.getIn(["login", "username"]),
    password: state.accounts.getIn(["login", "password"]),
    loading: state.accounts.getIn(["login", "loading"]),
    error: state.accounts.getIn(["login", "error"]),
    redirect: state.accounts.get("redirect"),
    logged: state.accounts.get("logged")
  }),
  dispatch => ({
    AccountsActions: bindActionCreators(accountsActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(LoginContainer));
