import { getFederationUnitiesService } from 'services/useIbgeServices';
import {
  requestFederationUnitiesAction,
  setFederationUnitiesAction
} from './federationUnities';

import type { AppDispatch } from 'store';
import { setErrorAction } from './error';

export const getFederationUnitiesThunk = () => async (dispatch: AppDispatch) => {
  dispatch(requestFederationUnitiesAction());
  try {
    const data = await getFederationUnitiesService();

    dispatch(setFederationUnitiesAction(data));
  }
  catch (error) {
    console.error(error);
    dispatch(setErrorAction('Something went wrong getting the Federation Unities, please try again later.'));
  }
};

// export const getCitiesThunk = (federationUnityId: number) => async (dispatch: AppDispatch) => {
//   dispatch(requestFederationUnities());
//   try {
//     const data = await getCitiesService(federationUnityId);

//     dispatch(setCitiesAction(data));

//   } catch (error) {
//     console.error(error);
//     dispatch(setError(`Something went wrong getting the cities from ${federationUnityId}, please try again later.`));
//   }
// };
