import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

// action types
const INITIALIZE = "licenses/INITIALIZE";

const SET_LICENSE = "licenses/SET_LICENSE";
const SET_PRICE = "licenses/SET_PRICE";

// action creators
export const initialize = createAction(INITIALIZE);

export const setLicense = createAction(SET_LICENSE);
export const setPrice = createAction(SET_PRICE);

// initial state
const initialState = Map({
  standard: Map({
    checked: false,
    price: null
  }),
  premium: Map({
    checked: false,
    price: null
  }),
  unlimited: Map({
    checked: false,
    price: null
  })
});

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [SET_LICENSE]: (state, action) => {
      const { name, checked } = action.payload;
      return state.setIn([name, "checked"], checked);
    },
    [SET_PRICE]: (state, action) => {
      const { name, price } = action.payload;
      return state.setIn([name, "price"], price);
    }
  },
  initialState
);
