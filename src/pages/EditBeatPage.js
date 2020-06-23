import React from "react";
import PageTemplate from "components/common/PageTemplate";
import EditBeatContainer from "containers/edit/EditBeatContainer";

const EditBeatPage = ({ match }) => {
  const beatId = match.params.beatId;
  return (
    <PageTemplate>
      <EditBeatContainer beatId={beatId} />
    </PageTemplate>
  );
};

export default EditBeatPage;
