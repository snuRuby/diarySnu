import React, { Component } from "react";
// import BeatsList from 'components/list/BeatsList';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as beatsActions from "store/modules/beats";
import * as api from "lib/api";

class BeatsListContainer extends Component {
  getBeatsList = () => {
    const { BeatsActions } = this.props;
    BeatsActions.getBeatsBegin();
    api
      .getBeatsList()
      .then(res => BeatsActions.getBeatsSuccess(res))
      .catch(error => BeatsActions.getBeatsFailure(error));
  };
  componentDidMount() {
    this.getBeatsList();
  }
  render() {
    const { beats, loading, error } = this.props;

    if (error) {
      return <div>{error.message}</div>;
    }

    if (loading) {
      return <div>loading...</div>;
    }

    return <div>{/* <BeatsList beats={beats} /> */}</div>;
  }
}

export default connect(
  state => ({
    beats: state.beats.get("beats"),
    loading: state.beats.get("loading"),
    error: state.beats.get("error")
  }),
  dispatch => ({
    BeatsActions: bindActionCreators(beatsActions, dispatch)
  })
)(BeatsListContainer);
