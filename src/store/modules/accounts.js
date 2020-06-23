import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";

// action types
const LOGIN_BEGIN = "accounts/LOGIN_BEGIN";
const LOGIN_SUCCESS = "accounts/LOGIN_SUCCESS";
const LOGIN_FAILURE = "accounts/LOGIN_FAILURE";
const CHANGE_LOGIN_INPUT = "accounts/CHANGE_LOGIN_INPUT";
const CHECK_LOGGED_BEGIN = "accounts/CHECK_LOGGED_BEGIN";
const CHECK_LOGGED_SUCCESS = "accounts/CHECK_LOGGED_SUCCESS";
const CHECK_LOGGED_FAILURE = "accounts/CHECK_LOGGED_FAILURE";

const REGISTER_BEGIN = "accounts/REGISTER_BEGIN";
const REGISTER_SUCCESS = "accounts/REGISTER_SUCCESS";
const REGISTER_FAILURE = "accounts/REGISTER_FAILURE";
const CHANGE_REG_INPUT = "accounts/CHANGE_REG_INPUT";
const REG_INPUT_ERROR = "accounts/REG_INPUT_ERROR";

const LOGOUT = "accounts/LOGOUT";
const TEMP_LOGIN = "accounts/TEMP_LOGIN";

// action creators
export const loginBegin = createAction(LOGIN_BEGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const changeLoginInput = createAction(CHANGE_LOGIN_INPUT);
export const checkLoggedBegin = createAction(CHECK_LOGGED_BEGIN);
export const checkLoggedSuccess = createAction(CHECK_LOGGED_SUCCESS);
export const checkLoggedFailure = createAction(CHECK_LOGGED_FAILURE);

export const registerBegin = createAction(REGISTER_BEGIN);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFailure = createAction(REGISTER_FAILURE);
export const changeRegInput = createAction(CHANGE_REG_INPUT);
export const regInputError = createAction(REG_INPUT_ERROR);

export const logout = createAction(LOGOUT);
export const tempLogin = createAction(TEMP_LOGIN);

// initial state
const initialState = Map({
  login: Map({
    loading: false,
    username: "",
    password: "",
    error: null
  }),
  register: Map({
    loading: false,
    username: "",
    password: "",
    password2: "",
    email: "",
    inputError: null,
    error: null
  }),
  check: Map({
    loading: false,
    error: null
  }),
  logged: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))["logged"]
    : false,
  redirect: false,
  authToken: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))["authToken"]
    : null,
  userId: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))["userId"]
    : null,
  username: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))["username"]
    : null
});

export default handleActions(
  {
    [LOGIN_BEGIN]: (state, action) => {
      return state.setIn(["login", "loading"], true).setIn(["error"], null);
    },
    [LOGIN_SUCCESS]: (state, action) => {
      const { token, user } = action.payload;
      const { username, id } = user;

      localStorage.setItem(
        "auth",
        JSON.stringify({
          logged: true,
          authToken: token,
          userId: id,
          username: username
        })
      );

      return state
        .setIn(["login", "loading"], false)
        .set("logged", true)
        .set("authToken", token)
        .set("userId", id)
        .set("username", username)
        .set("redirect", true);
    },
    [LOGIN_FAILURE]: (state, action) => {
      const { error: message } = action.payload;
      return state
        .setIn(["login", "loading"], false)
        .setIn(["login", "error"], message)
        .setIn(["login", "password"], "");
    },
    [CHANGE_LOGIN_INPUT]: (state, action) => {
      const { type, value } = action.payload;
      return state.setIn(["login", type], value);
    },
    [CHECK_LOGGED_BEGIN]: (state, action) => {
      return state
        .setIn(["check", "loading"], true)
        .setIn(["check", "error"], null);
    },
    [CHECK_LOGGED_SUCCESS]: (state, action) => {
      const { logged, token, id, username } = action.payload;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          logged: logged,
          authToken: token,
          userId: id,
          username: username
        })
      );
      return state
        .setIn(["check", "loading"], false)
        .set("logged", true)
        .set("authToken", token)
        .set("userId", id)
        .set("username", username);
    },
    [CHECK_LOGGED_FAILURE]: (state, action) => {
      localStorage.removeItem("auth");
      return state
        .setIn(["check", "loading"], false)
        .set("logged", false)
        .setIn(["check", "error"], action.payload.error)
        .set("authToken", null)
        .set("userId", null)
        .set("username", null)
        .set("redirect", false);
    },
    [REGISTER_BEGIN]: (state, action) => {
      return state
        .setIn(["register", "loading"], true)
        .setIn(["register", "inputError"], null)
        .setIn(["register", "error"], null);
    },
    [REGISTER_SUCCESS]: (state, action) => {
      const { token, user } = action.payload;
      const { username, id } = user;

      localStorage.setItem(
        "auth",
        JSON.stringify({
          logged: true,
          authToken: token,
          userId: id,
          username: username
        })
      );
      return state
        .setIn(["register", "loading"], false)
        .set("logged", true)
        .set("authToken", token)
        .set("userId", id)
        .set("username", username)
        .set("redirect", true);
    },
    [REGISTER_FAILURE]: (state, action) => {
      return state
        .setIn(["register", "loading"], false)
        .setIn(["register", "error"], action.payload.error);
    },
    [CHANGE_REG_INPUT]: (state, action) => {
      const { type, value } = action.payload;
      return state.setIn(["register", type], value);
    },
    [REG_INPUT_ERROR]: (state, action) => {
      const { error } = action.payload;
      return state.setIn(["register", "inputError"], error);
    },
    [LOGOUT]: (state, action) => {
      localStorage.removeItem("auth");
      return state
        .set("logged", false)
        .set("authToken", null)
        .set("userId", null)
        .set("username", null)
        .set("redirect", false);
    },
    [TEMP_LOGIN]: (state, action) => {
      return state.set("logged", true);
    }
  },
  initialState
);
