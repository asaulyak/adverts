import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct, getProducts } from '../common/api/api.js';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (options, thunkAPI) => {
    try {
      const { data } = await getProducts(options);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchProductsRange = createAsyncThunk(
  'products/fetchRange',
  async (options, thunkAPI) => {
    try {
      const { data } = await getProducts(options);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  'products/fetchOne',
  async (productId, thunkAPI) => {
    try {
      const { data } = await getProduct(productId);

      return data ;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
