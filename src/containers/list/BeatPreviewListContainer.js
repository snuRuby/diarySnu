import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import * as baseActions from "store/modules/base";
import * as beatsActions from "store/modules/beats";
import * as api from "lib/api";

import BeatPreviewList from "components/list/BeatPreviewList";
import BeatPost from "components/item/BeatPost";

const styles = theme => ({
  modalStyle: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    height: "100%",
    alignItems: "center"
  }
});

class BeatPreviewListContainer extends Component {
  handleClickBeatPreview = id => {
    const { BaseActions, BeatsActions } = this.props;
    BaseActions.showModal("beat");
    BeatsActions.setIndex(id);
  };
  handleCloseModal = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal("beat");
  };
  initialize = async () => {
    const { BeatsActions } = this.props;
    BeatsActions.getBeatsBegin();
    try {
      const beatsList = await api.getBeatsList();
      BeatsActions.getBeatsSuccess(beatsList);
    } catch (e) {
      BeatsActions.getBeatsFailure(e);
    }
  };
  componentDidMount() {
    this.initialize();
  }
  render() {
    const { loading, beats, index } = this.props;
    const beatsList = beats.toJS();
    console.log(index);
    if (loading) return null;
    return (
      <React.Fragment>
        <BeatPreviewList
          beatPreviews={beats.toJS()}
          handleClickBeatPreview={this.handleClickBeatPreview}
        />
        <Modal
          className={this.props.classes.modalStyle}
          open={this.props.beatModal}
          onClose={this.handleCloseModal}
          disableAutoFocus
        >
          <BeatPost
            beat={beatsList[index]}
            closeModal={this.handleCloseModal}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    beats: state.beats.get("beats"),
    index: state.beats.get("index"),
    loading: state.beats.get("loading"),
    error: state.beats.get("error"),
    beatModal: state.base.getIn(["modal", "beat"])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    BeatsActions: bindActionCreators(beatsActions, dispatch)
  })
)(withStyles(styles)(BeatPreviewListContainer));
