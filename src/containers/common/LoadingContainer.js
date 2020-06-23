import React, { Component } from "react";

import Modal from "@material-ui/core/Modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

class LoadingContainer extends Component {
  render() {
    return (
      <Modal
        aria-labelledby="loading-modal"
        aria-describedby="Site's contents are being loaded"
        open={this.props.visible}
        onClose={null}
      >
        <div>Loading...</div>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    visible: state.base.get("loading")
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoadingContainer);
