import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as accountsActions from "store/modules/accounts";
import * as baseActions from "store/modules/base";
import * as api from "lib/api";

import Header from "components/common/Header";

class HeaderContainer extends Component {
  onClickLogin = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal("login");
  };
  onLogout = () => {
    const { AccountsActions } = this.props;
    // TODO: server side logout (session) should be completed
    AccountsActions.logout();
  };
  render() {
    const { logged, username, loading, error } = this.props;
    const { onClickLogin, onLogout } = this;

    return (
      <React.Fragment>
        <Header
          logged={logged}
          username={username}
          loading={loading}
          error={error}
          onLogout={onLogout}
          onClickLogin={onClickLogin}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    logged: state.accounts.get("logged"),
    username: state.accounts.get("username")
  }),
  dispatch => ({
    AccountsActions: bindActionCreators(accountsActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);
