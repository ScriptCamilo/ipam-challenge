import { configureStore } from '@reduxjs/toolkit';

import { ibgeApi } from 'services/useIbgeServices';
import { federationUnity } from './slices';

export default configureStore({
  reducer: {
    federationUnity: federationUnity.reducer,
    [ibgeApi.reducerPath]: ibgeApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ibgeApi.middleware),
});
