import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "@material-ui/core/Modal";

import * as baseActions from "store/modules/base";
import LoginContainer from "containers/account/LoginContainer";

class LoginModalContainer extends Component {
  handleCloseModal = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal("login");
  };

  render() {
    return (
      <Modal
        aria-labelledby="login-modal"
        aria-describedby="login with id and password"
        open={this.props.visible}
        onClose={this.handleCloseModal}
      >
        <LoginContainer onClose={this.handleCloseModal} />
      </Modal>
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(["modal", "login"])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);
