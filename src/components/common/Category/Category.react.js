import React from "react";
import "./Category.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles"; // css overrides시 필요

const CheckedCategory = withStyles({
  root: {
    background: "black",
    borderRadius: 0,
    border: 0,
    color: "white",
    height: 50,
    padding: "0 30px",
    fontSize: "1.3rem",
    fontWeight: "600",
    "&:hover": {
      background: "black"
    }
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const UncheckedCategory = withStyles({
  root: {
    background: "white",
    border: 0,
    borderColor: "black",
    color: "black",
    height: 50,
    padding: "0 30px",
    fontSize: "1.1rem",
    fontWeight: "600",
    "&:hover": {
      background: "rgb(221, 233, 252,60%)"
    }
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const Category = ({ title, isChecked, handleClick }) => {
  return (
    <div className="category" onClick={handleClick}>
      {isChecked ? (
        <CheckedCategory fullWidth="true">{title}</CheckedCategory>
      ) : (
        <UncheckedCategory fullWidth="true">{title}</UncheckedCategory>
      )}
    </div>
  );
};

export default Category;
