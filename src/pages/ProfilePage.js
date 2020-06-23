import React from "react";
import PageTemplate from "components/common/PageTemplate";
import ProfileContainer from "containers/profile/ProfileContainer";

const ProfilePage = ({ match }) => {
  return (
    <PageTemplate>
      <ProfileContainer userid={match.params.userid} />
    </PageTemplate>
  );
};

export default ProfilePage;
