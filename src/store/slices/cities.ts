import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { CitiesTypes } from '@types';
import { getCitiesService } from 'services/useIbgeServices';

export interface CityState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  data: CitiesTypes[];
  error: string | undefined;
  selectedId: string | undefined;
}

const initialState = {
  status: 'idle',
  data: [],
  error: undefined,
  selectedId: undefined
} as CityState;

export const fetchCities = createAsyncThunk('cities/getThunk', async (ufId: string) => {
  const data = await getCitiesService(ufId);
  return data;
});

export const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    changeCity(state, action) {
      state.selectedId = action.payload;
    },
    resetCity(state) {
      state.selectedId = undefined;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
        state.data = [];
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Something went wrong getting the cities from';
        console.error(action.error.message);
      });
  },
});

export const { changeCity, resetCity } = cities.actions;
