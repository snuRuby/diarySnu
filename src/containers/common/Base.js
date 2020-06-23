import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginModalContainer from "./LoginModalContainer";
import LoadingContainer from "./LoadingContainer";
import * as accountActions from "store/modules/accounts";
import * as baseActions from "store/modules/base";
import * as api from "lib/api";

class Base extends Component {
  initialize = async () => {
    if (!localStorage.getItem("auth")) return;
    const { AccountActions } = this.props;
    if (JSON.parse(localStorage.getItem("auth")).logged) {
      AccountActions.tempLogin();
    }
    // AccountActions.checkLoggedBegin();
    // try {
    //     const logged = await api.checkLogin();
    //     AccountActions.checkLoggedSuccess(logged);
    // } catch(e) {
    //     console.log(e);
    //     AccountActions.checkLoggedFailure(e);
    // }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <React.Fragment>
        <LoginModalContainer />
        <LoadingContainer />
        {/**
         * globally used components are rendered here.
         */}
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    AccountActions: bindActionCreators(accountActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);
