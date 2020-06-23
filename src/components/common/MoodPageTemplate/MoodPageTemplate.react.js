import React from "react";

import HeaderContainer from "containers/common/HeaderContainer";
import Footer from "components/common/Footer";
import "./MoodPageTemplate.css";

const MoodPageTemplate = ({ children }) => {
  return (
    <div className="pagetemplate_wrapper">
      <HeaderContainer />
      <main className="children-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default MoodPageTemplate;
