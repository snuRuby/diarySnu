import { createAction, handleActions } from "redux-actions";
import { Map, List, fromJS } from "immutable";

// action types
const INITIALIZE = "beats/INITIALIZE";
const SET_INDEX = "beats/SET_INDEX";
const SET_BEAT_DETAIL = "beats/SET_BEAT_DETAIL";

const GET_BEATS_BEGIN = "beats/GET_BEATS_BEGIN";
const GET_BEAT_SUCCESS = "beats/GET_BEAT_SUCCESS";
const GET_BEATS_SUCCESS = "beats/GET_BEATS_SUCCESS";
const GET_BEAT_FAILURE = "beats/GET_BEATS_FAILURE";
const GET_BEATS_FAILURE = "beats/GET_BEATS_FAILURE";

const POST_BEATS_BEGIN = "beats/POST_BEATS_BEGIN";
const POST_BEATS_SUCCESS = "beats/POST_BEATS_SUCCESS";
const POST_BEATS_FAILURE = "beats/POST_BEATS_FAILURE";

// action creators
export const initialize = createAction(INITIALIZE);
export const setIndex = createAction(SET_INDEX);
export const setBeatDetail = createAction(SET_BEAT_DETAIL);

export const getBeatsBegin = createAction(GET_BEATS_BEGIN);
export const getBeatSuccess = createAction(GET_BEAT_SUCCESS);
export const getBeatsSuccess = createAction(GET_BEATS_SUCCESS);
export const getBeatFailure = createAction(GET_BEAT_FAILURE);
export const getBeatsFailure = createAction(GET_BEATS_FAILURE);

export const postBeatsBegin = createAction(POST_BEATS_BEGIN);
export const postBeatsSuccess = createAction(POST_BEATS_SUCCESS);
export const postBeatsFailure = createAction(POST_BEATS_FAILURE);

// initial state
const initialState = Map({
  loading: false,
  beats: List(),
  error: null,
  index: null,
  beat: Map({}),
  post: Map({
    loading: false,
    error: null,
    success: null
  })
});
/**
 * Map({
        id: null,
        title: null,
        created: null,
        updated: null,
        author: null,
        description: null,
        num_like: null,
        num_comment: null,
        hasWaterMark: null,
        bpm: null,
        owner: null,
        imgUrl: null,
        downloadUrl: null,
        tags: List(),
    }),
 */
// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [SET_INDEX]: (state, action) => {
      const id = action.payload;
      return state.set("index", id);
    },
    [SET_BEAT_DETAIL]: (state, action) => {
      return state.setIn(["beat", action.payload.key], action.payload.value);
    },
    [SET_BEAT_DETAIL]: (state, action) => {
      return state.setIn(["beat", action.payload.key], action.payload.value);
    },
    [GET_BEATS_BEGIN]: (state, action) => {
      return state.set("loading", true).set("error", null);
    },
    [GET_BEAT_SUCCESS]: (state, action) => {
      const { data: response } = action.payload;
      return state.set("beat", fromJS(response)).set("loading", false);
    },
    [GET_BEAT_SUCCESS]: (state, action) => {
      const { data: response } = action.payload;
      return state.set("beat", fromJS(response)).set("loading", false);
    },
    [GET_BEATS_SUCCESS]: (state, action) => {
      const { data: response } = action.payload;
      return state.set("beats", fromJS(response.results)).set("loading", false);
    },
    [GET_BEAT_FAILURE]: (state, action) => {
      return state
        .set("loading", false)
        .set("error", action.payload.error)
        .set("beat", Map({}));
    },
    [GET_BEAT_FAILURE]: (state, action) => {
      return state
        .set("loading", false)
        .set("error", action.payload.error)
        .set("beat", Map({}));
    },
    [GET_BEATS_FAILURE]: (state, action) => {
      return state
        .set("loading", false)
        .set("error", action.payload.error)
        .set("beats", List());
    },
    [POST_BEATS_BEGIN]: (state, action) => {
      return state.setIn(["post", "loading"], true);
    },
    [POST_BEATS_SUCCESS]: (state, action) => {
      const { data: beat } = action.payload;
      return state
        .setIn(["post", "loading"], false)
        .setIn(["beat", "id"], beat.id)
        .setIn(["post", "success"], true);
    },
    [POST_BEATS_FAILURE]: (state, action) => {
      return state
        .setIn(["post", "loading"], false)
        .setIn(["post", "error"], action.payload.error);
    }
  },
  initialState
);
