import { createSlice } from '@reduxjs/toolkit';

import type { FederationUnityTypes } from '@types';

export interface FederationUnityState {
  isLoading: false;
  data: FederationUnityTypes[];
  value: string | null;
}

const initialState = {
  isLoading: false,
  data: [],
  value: null
} as FederationUnityState;

export const federationUnities = createSlice({
  name: 'federationUnities',
  initialState,
  reducers: {
    changeFederationUnity(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFederationUnity } = federationUnities.actions;
