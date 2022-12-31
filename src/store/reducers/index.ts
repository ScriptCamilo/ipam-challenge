import { combineReducers } from 'redux';

import error from './error';
import federationUnities from './federationUnities';

const rootReducers = combineReducers({
  federationUnities,
  error,
});

export default rootReducers;
