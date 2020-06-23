import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

const initialState = List([
  Map({
    id: 0,
    imageUrl: "/images/cover-1-dummy.jpg",
    title: "Jealousy",
    summary: "밝은 분위기 팝 스타일 비트",
    tags: ["BRIGHT", "POP", "ARIANA GRANDE"]
  }),
  Map({
    id: 1,
    imageUrl: "/images/cover-2-dummy.jpg",
    title: "Mixed In",
    summary: "피아노 선율이 들어간 뉴 재즈 힙합",
    tags: ["NEW SCHOOL", "JAZZ", "PIANO"]
  }),
  Map({
    id: 2,
    imageUrl: "/images/cover-3-dummy.jpg",
    title: "Smoking Dreamz",
    summary: "재지팩트 오마쥬 비트",
    tags: ["JAZZYFACT", "HOMAGE", "JAZZ"]
  }),
  Map({
    id: 3,
    imageUrl: "/images/cover-4-dummy.jpg",
    title: "Welcome to Forever",
    tags: ["OLD SCHOOL", "VANS", "BOOMBAP"]
  }),
  Map({
    id: 4,
    imageUrl: "/images/cover-1-dummy.jpg",
    title: "Jealousy",
    summary: "밝은 분위기 팝 스타일 비트",
    tags: ["BRIGHT", "POP", "ARIANA GRANDE"]
  }),
  Map({
    id: 5,
    imageUrl: "/images/cover-2-dummy.jpg",
    title: "Mixed In",
    summary: "피아노 선율이 들어간 뉴 재즈 힙합",
    tags: ["NEW SCHOOL", "JAZZ", "PIANO"]
  }),
  Map({
    id: 6,
    imageUrl: "/images/cover-3-dummy.jpg",
    title: "Smoking Dreamz",
    summary: "재지팩트 오마쥬 비트",
    tags: ["JAZZYFACT", "HOMAGE", "JAZZ"]
  }),
  Map({
    id: 7,
    imageUrl: "/images/cover-4-dummy.jpg",
    title: "Welcome to Forever",
    tags: ["OLD SCHOOL", "VANS", "BOOMBAP"]
  })
]);

export default handleActions({}, initialState);
