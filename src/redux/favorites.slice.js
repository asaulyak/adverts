import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    productIds: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.productIds.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.productIds = state.productIds.filter(
        item => item !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
