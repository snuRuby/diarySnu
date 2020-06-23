import React from "react";
import "./CustomButton.css";
import Button from "@material-ui/core/Button";
// import { withStyles } from '@material-ui/core/styles';  // css overrides시 필요

import { Link } from "react-router-dom";

const CustomButton = ({ variant = "fab", fullWidth, to, children }) => {
  return to ? (
    <Button
      variant={variant}
      mini={true}
      color="primary"
      fullWidth={fullWidth}
      component={Link}
      to={to}
    >
      {children}
    </Button>
  ) : (
    <Button variant={variant} mini={true} color="primary" fullWidth={fullWidth}>
      {children}
    </Button>
  );
};

export default CustomButton;

// ---- css overrides 하는 방법 ---- //
//
// const CustomButton = withStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       borderRadius: 3,
//       border: 0,
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//     label: {
//       textTransform: 'capitalize',
//     },
//   })(Button);
