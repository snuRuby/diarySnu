import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import EditBeat from "components/edit/EditBeat";
import * as api from "lib/api";
import * as beatsActions from "store/modules/beats";
import * as licensesActions from "store/modules/licenses";

class EditBeatContainer extends Component {
  componentDidMount() {
    this.init();
  }
  init = async () => {
    const { BeatsActions, LicensesActions } = this.props;
    if (this.props.beatId) {
      // beatId가 이미 존재하는 경우는 beat를 수정하는 상황인 것.
      // beatId에 맞는 정보를 갖고와야 한다.
      BeatsActions.getBeatsBegin();
      try {
        const res = await api.getBeatById(this.props.beatId);
        BeatsActions.getBeatSuccess(res);
        if (res.data.licenses) {
          // TODO: licenses in beat model.
        } else {
          LicensesActions.initialize();
        }
      } catch (error) {
        BeatsActions.getBeatFailure(error);
      }
    } else {
      // beatId가 없는 상태는 새로운 비트를 만드는 과정
    }
  };
  handleChange = e => {
    const { BeatsActions } = this.props;
    BeatsActions.setBeatDetail({ key: e.target.name, value: e.target.value });
  };
  handleUpload = name => event => {
    const { BeatsActions } = this.props;
    console.log(event.target.files[0]);
    BeatsActions.setBeatDetail({ key: name, value: event.target.files[0] });
  };
  handleCheck = name => event => {
    const { LicensesActions } = this.props;
    LicensesActions.setLicense({ name: name, checked: event.target.checked });
  };
  changePrice = name => event => {
    const { LicensesActions } = this.props;
    LicensesActions.setPrice({ name: name, price: event.target.value });
  };
  onSubmit = async () => {
    const { BeatsActions, beat } = this.props;
    BeatsActions.postBeatsBegin();

    let formData = new FormData();
    formData.append("title", beat.get("title"));
    formData.append("description", beat.get("description"));
    // formData.append('tags', beat.get('tags'));
    formData.append("mbeat", beat.get("mbeat"));
    formData.append("mimage", beat.get("mimage"));
    try {
      const response = await api.createBeat(formData);
      console.log(response);
      if (response.status === 200) {
        return BeatsActions.postBeatsSuccess();
      }
    } catch (e) {
      const error = { error: e.message };
      return BeatsActions.postBeatsFailure(error);
    }
  };
  addTag = () => {
    const { BeatsActions, beat } = this.props;
    const newTag = beat.toJS().tag;
    let tagList = beat.toJS().tags || [];
    if (!newTag || tagList.includes(newTag)) return;
    tagList.push(newTag);
    BeatsActions.setBeatDetail({ key: "tags", value: tagList });
  };
  removeTag = tag => {
    const { BeatsActions, beat } = this.props;
    let tagList = beat.toJS().tags;
    BeatsActions.setBeatDetail({
      key: "tags",
      value: tagList.filter(t => t !== tag)
    });
  };
  render() {
    return this.props.post.get("success") ? (
      <Redirect to={`beat/${this.props.beat.get("id")}`} />
    ) : (
      <EditBeat
        onChange={this.handleChange}
        onUpload={this.handleUpload}
        onCheck={this.handleCheck}
        onSubmit={this.onSubmit}
        changePrice={this.changePrice}
        addTag={this.addTag}
        removeTag={this.removeTag}
        beat={this.props.beat.toJS()}
        licenses={{
          standard: this.props.standard.toJS(),
          premium: this.props.premium.toJS(),
          unlimited: this.props.unlimited.toJS()
        }}
      />
    );
  }
}

export default connect(
  state => ({
    beat: state.beats.get("beat"),
    post: state.beats.get("post"),
    standard: state.licenses.get("standard"),
    premium: state.licenses.get("premium"),
    unlimited: state.licenses.get("unlimited")
  }),
  dispatch => ({
    BeatsActions: bindActionCreators(beatsActions, dispatch),
    LicensesActions: bindActionCreators(licensesActions, dispatch)
  })
)(EditBeatContainer);
