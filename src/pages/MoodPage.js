import React from "react";
import MoodPageTemplate from "components/common/MoodPageTemplate";
import BeatListContainerTemp from "containers/list/BeatListContainerTemp";
import CategoryListContainer from "containers/list/CategoryListContainer";

const MoodPage = () => {
  return (
    <MoodPageTemplate>
      <CategoryListContainer categoryTitle="Mood" />
      <BeatListContainerTemp />
    </MoodPageTemplate>
  );
};

export default MoodPage;
