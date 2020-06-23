import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoryList from "components/list/CategoryList";
import * as categoriesActions from "store/modules/categories";

class CategoryListContainer extends Component {
  handleClick = id => {
    const { CategoriesActions } = this.props;
    CategoriesActions.clickCategory(id);
  };

  render() {
    const { categories, categoryTitle } = this.props;
    const { handleClick } = this;
    return (
      <CategoryList
        categories={categories}
        categoryTitle={categoryTitle}
        handleClick={handleClick}
      />
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  dispatch => ({
    CategoriesActions: bindActionCreators(categoriesActions, dispatch)
  })
)(CategoryListContainer);
