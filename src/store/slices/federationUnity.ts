import { createSlice } from '@reduxjs/toolkit';

export interface FederationUnityState {
  value: string | null;
}

const initialState = {
  value: null
} as FederationUnityState;

export const federationUnity = createSlice({
  name: 'federationUnity',
  initialState,
  reducers: {
    changeFederationUnity(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFederationUnity } = federationUnity.actions;
