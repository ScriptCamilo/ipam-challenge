import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { DistrictsTypes } from '@types';
import { getDistrictsService } from 'services/useIbgeServices';

export interface DistrictsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  data: DistrictsTypes[];
  error: string | undefined;
}

const initialState = {
  status: 'idle',
  data: [],
  error: undefined
} as DistrictsState;

export const fetchDistricts = createAsyncThunk('districts/getThunk', async (ufId: string) => {
  const data = await getDistrictsService(ufId);
  return data;
});

export const districts = createSlice({
  name: 'districts',
  initialState,
  reducers: {
    resetDistricts(state) {
      state.data = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDistricts.pending, (state) => {
        state.status = 'loading';
        state.data = [];
      })
      .addCase(fetchDistricts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDistricts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Something went wrong getting the districts from';
        console.error(action.error.message);
      });
  },
});

export const { resetDistricts } = districts.actions;
