import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getHello: null,
  gotHello: ["hello"],
  helloFailure: null
});

export const HelloTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  hello: null,
  fetching: null,
  error: null
});

/* ------------- Reducers ------------- */

export const request = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null });

export const success = (state, action) => {
  return state.merge({ fetching: false, hello: action.hello });
};

export const failure = state =>
  state.merge({ fetching: false, error: true, hello: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_HELLO]: request,
  [Types.GOT_HELLO]: success,
  [Types.HELLO_FAILURE]: failure
});
