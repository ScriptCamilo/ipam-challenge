import { configureStore } from '@reduxjs/toolkit';

import { cities, districts, federationUnities } from './slices';

export const store = configureStore({
  reducer: {
    federationUnities: federationUnities.reducer,
    cities: cities.reducer,
    districts: districts.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
