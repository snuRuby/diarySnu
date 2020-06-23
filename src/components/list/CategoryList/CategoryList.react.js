import React from "react";
import { Link } from "react-router-dom";

import "./CategoryList.css";
import Category from "components/common/Category";

import Grid from "@material-ui/core/Grid";

const CategoryList = ({ categories, categoryTitle, handleClick }) => {
  const categoryList = categories.map(category => {
    return (
      <Category
        title={category.get("title")}
        isChecked={category.get("isChecked")}
        key={category.get("id")}
        handleClick={() => handleClick(category.get("id"))}
      />
    );
  });

  return (
    <div className="category-list-wrapper">
      <div className="category-title">{categoryTitle}</div>
      <div className="category-list">{categoryList}</div>
    </div>
  );
};

export default CategoryList;
