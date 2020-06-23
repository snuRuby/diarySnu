import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";

// action types
const SHOW_MODAL = "base/SHOW_MODAL";
const HIDE_MODAL = "base/HIDE_MODAL";
const SHOW_LOADING = "base/SHOW_LOADING";
const HIDE_LOADING = "base/HIDE_LOADING";

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const showLoading = createAction(SHOW_LOADING);
export const hideLoading = createAction(HIDE_LOADING);

// initial state
const initialState = Map({
  // visible state of modal
  modal: Map({
    remove: false,
    login: false,
    beat: false
  }),
  loading: false
});

// reducer
export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(["modal", modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(["modal", modalName], false);
    },
    [SHOW_LOADING]: (state, action) => {
      return state.set("loading", true);
    },
    [HIDE_LOADING]: (state, action) => {
      return state.set("loading", false);
    }
  },
  initialState
);
