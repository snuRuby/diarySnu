import React from "react";
import PageTemplate from "components/common/PageTemplate";
import BeatsListContainer from "containers/list/BeatsListContainer";

const GenrePage = () => {
  return (
    <PageTemplate>
      <BeatsListContainer />
    </PageTemplate>
  );
};

export default GenrePage;
