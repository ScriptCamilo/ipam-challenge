// import { configureStore } from '@reduxjs/toolkit';

// import { ibgeApi } from 'services/useIbgeServices';
// import { federationUnity } from './slices';

// export default configureStore({
//   reducer: {
//     federationUnity: federationUnity.reducer,
//     [ibgeApi.reducerPath]: ibgeApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ibgeApi.middleware),
// });

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
