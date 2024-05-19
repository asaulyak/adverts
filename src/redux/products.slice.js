import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct, fetchProducts } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, handlePending);
    builder.addCase(fetchProduct.pending, handlePending);

    builder.addCase(fetchProducts.rejected, handleRejected);
    builder.addCase(fetchProduct.rejected, handleRejected);

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      const updatedItem = action.payload;

      state.items = [
        ...state.items.filter(item => item.id !== updatedItem.id),
        updatedItem,
      ];
    });
  },
});

export const productsReducer = productsSlice.reducer;
