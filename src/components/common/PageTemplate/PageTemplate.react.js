import React from "react";

import HeaderContainer from "containers/common/HeaderContainer";
import Footer from "components/common/Footer";
import "./PageTemplate.css";

const PageTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default PageTemplate;
