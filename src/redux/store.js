import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products.slice.js';
import { filtersReducer } from './filters.slice.js';
import { favoritesReducer } from './favorites.slice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites']
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  })
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
