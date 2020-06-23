import React from "react";
import "./BeatListTitle.css";

const BeatListTitle = ({ categories }) => {
  var title = "";
  var numOfChecked = 0;

  const categoryList = categories.map(category => {
    const isChecked = category.get("isChecked");
    if (isChecked) {
      // 카테고리 목록 중 체크된 카테고리에 대해서만 아래 작업 수행
      numOfChecked++;
      if (numOfChecked === 1) {
        // 체크된 항목이 1개인 경우 Angry 와 같이 그대로 보여주면 됨
        const categoryTitle = category.get("title");
        title = title.concat(categoryTitle);
      } else if (numOfChecked > 1 && numOfChecked < 4) {
        // 체크된 항목이 2~3개인 경우, Angry || Cheerful || Dramatic 과 같이 나타내기 위함
        const categoryTitle = category.get("title");
        title = title.concat(" || ").concat(categoryTitle);
      } else if (numOfChecked === 4) {
        // 선택된 카테고리가 4개 이상인 경우 적당히 줄여서 나타냄
        title = title.concat(" || ...");
      }
    }
  });

  return <div className="beatlist-title">{title}</div>;
};

export default BeatListTitle;
