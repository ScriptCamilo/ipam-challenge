import { ERROR } from '../actions/error';

export interface ErrorActionTypes {
  type: string;
  payload: string;
}

const INITIAL_STATE = {
  error: null,
};

function error(state = INITIAL_STATE, { type, payload }: ErrorActionTypes) {
  switch(type) {
  case ERROR:
    return {
      ...state,
      error: payload,
    };
  default:
    return state;
  }
}

export default error;
