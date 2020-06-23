import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

const CLICK_CATEGORY = "categories/CLICK_CATEGORY";

export const clickCategory = createAction(CLICK_CATEGORY);

const initialState = List([
  Map({
    id: 0,
    isChecked: true,
    title: "ALL"
  }),
  Map({
    id: 1,
    isChecked: false,
    title: "aggressive"
  }),
  Map({
    id: 2,
    isChecked: false,
    title: "angry"
  }),
  Map({
    id: 3,
    isChecked: false,
    title: "bouncy"
  }),
  Map({
    id: 4,
    isChecked: false,
    title: "calming"
  }),
  Map({
    id: 5,
    isChecked: false,
    title: "carefree"
  }),
  Map({
    id: 6,
    isChecked: false,
    title: "cheerful"
  }),
  Map({
    id: 7,
    isChecked: false,
    title: "cold"
  }),
  Map({
    id: 8,
    isChecked: false,
    title: "complex"
  }),
  Map({
    id: 9,
    isChecked: false,
    title: "cool"
  }),
  Map({
    id: 10,
    isChecked: false,
    title: "dark"
  }),
  Map({
    id: 11,
    isChecked: false,
    title: "dramatic"
  }),
  Map({
    id: 12,
    isChecked: false,
    title: "dreamy"
  }),
  Map({
    id: 13,
    isChecked: false,
    title: "eerie"
  })
]);

export default handleActions(
  {
    [CLICK_CATEGORY]: (state, action) => {
      const { payload: id } = action;

      const index = state.findIndex(category => category.get("id") === id);

      if (index === 0) {
        // ALL 장르를 누른 경우
        const isChecked = state.getIn([0, "isChecked"]);
        if (isChecked) {
          // ALL 이 눌려있던 경우에는 아무 것도 하지 않는다.
          return state;
        } else {
          // ALL 이 눌려있지 않던 경우
          const newState = state.map(category => {
            return category.set("isChecked", false);
          });

          return newState.updateIn([0, "isChecked"], isChecked => true);
        }
      } else {
        // ALL 이외의 장르를 누른 경우
        return state
          .updateIn([index, "isChecked"], isChecked => !isChecked)
          .updateIn([0, "isChecked"], isChecked => false);
      }
    }
  },
  initialState
);
