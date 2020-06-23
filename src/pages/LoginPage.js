import React from "react";
import PageTemplate from "components/common/PageTemplate";
import LoginContainer from "containers/account/LoginContainer";

const LoginPage = ({ match }) => {
  return (
    <PageTemplate>
      <LoginContainer />
    </PageTemplate>
  );
};

export default LoginPage;
