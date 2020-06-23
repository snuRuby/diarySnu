import React from "react";
import "./BeatPreviewList.css";
import BeatPreview from "components/item/BeatPreview";

const BeatPreviewList = ({ beatPreviews, handleClickBeatPreview }) => {
  const beatPreviewList = beatPreviews.map((beatPreview, i) => {
    return (
      <BeatPreview
        key={beatPreview["id"]}
        imageUrl={"/images/cover-1-dummy.jpg"}
        title={beatPreview["title"]}
        summary={beatPreview["description"]}
        tags={beatPreview["tags"]}
        onClick={() => handleClickBeatPreview(i)}
      />
    );
  });

  return <React.Fragment>{beatPreviewList}</React.Fragment>;
};

export default BeatPreviewList;
