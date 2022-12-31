import type { FederationUnityTypes } from '@types';
import { REQUEST_UFS, SET_UFS } from '../actions/federationUnities';

export interface FederationUnitiesActionTypes {
  type: string;
  payload?: FederationUnityTypes;
}

const INITIAL_STATE = {
  isLoading: false,
  data: []
};

function federationUnities(state = INITIAL_STATE, { type, payload }: FederationUnitiesActionTypes) {
  switch(type) {
  case REQUEST_UFS:
    return {
      ...state,
      isLoading: true,
    };
  case SET_UFS:
    return {
      ...state,
      data: payload,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default federationUnities;
