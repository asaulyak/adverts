import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products.slice.js';
import { filtersReducer } from './filters.slice.js';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});
