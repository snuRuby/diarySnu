import { createStore, compose, combineReducers } from "redux";
import * as modules from "./modules";

const reducers = combineReducers(modules);

// Apply Redux Devtool only in Dev mode
const isDev = process.env.NODE_ENV === "development";
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState is for server-side rendering
const configure = preloadedState =>
  createStore(reducers, preloadedState, composeEnhancers());

export default configure;
