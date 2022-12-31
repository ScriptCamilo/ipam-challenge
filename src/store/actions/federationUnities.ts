import type { FederationUnityTypes } from '@types';

export const REQUEST_UFS = 'REQUEST_FEDERATION_UNITIES';
export const SET_UFS = 'SET_FEDERATION_UNITIES_SUCCESS';

export const requestFederationUnitiesAction = () => ({
  type: REQUEST_UFS,
});

export const setFederationUnitiesAction = (payload: FederationUnityTypes) => ({
  type: SET_UFS,
  payload,
});
