import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoriesActions from "store/modules/categories";
import BeatListTitle from "components/common/BeatListTitle";

class BeatListContainerTemp extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <BeatListTitle categories={categories} />
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  dispatch => ({})
)(BeatListContainerTemp);
