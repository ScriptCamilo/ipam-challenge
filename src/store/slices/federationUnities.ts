import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { FederationUnityTypes } from '@types';
import { getFederationUnitiesService } from 'services/useIbgeServices';

export interface FederationUnityState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  data: FederationUnityTypes[];
  error: string | undefined;
  selectedId: string | undefined;
}

const initialState = {
  status: 'idle',
  data: [],
  error: undefined,
  selectedId: undefined
} as FederationUnityState;

export const fetchUFS = createAsyncThunk('federationUnities/getThunk', async () => {
  const data = await getFederationUnitiesService();
  return data;
});

export const federationUnities = createSlice({
  name: 'federationUnities',
  initialState,
  reducers: {
    changeFederationUnity(state, action) {
      state.selectedId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUFS.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUFS.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUFS.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Something went wrong getting the UFS';
        console.error(action.payload);
      });
  },
});

export const { changeFederationUnity } = federationUnities.actions;
