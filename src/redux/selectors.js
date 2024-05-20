import { createSelector } from '@reduxjs/toolkit';
import { equipmentFilters } from '../common/filters/equipment-filters.js';

export const selectProducts = state => state.products.items;

export const selectProduct = (state, productId) =>
  state.products.items.find(item => item.id === productId);

export const selectFilters = state => state.filters;

export const selectProductsLoading = state => state.products.isLoading;

export const selectFilterSearchParams = createSelector(
  [selectFilters],
  filters => filters.searchParams
);

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    let filteredProducts = products.slice(0);

    if (filters.equipment.length) {
      const equipmentFiltersMap = equipmentFilters.reduce(
        (acc, filter) => ({ ...acc, [filter.name]: filter }),
        {}
      );
      filteredProducts = filteredProducts.filter(product => {
        return filters.equipment.every(filterName => {
          const filter = equipmentFiltersMap[filterName];

          if (!filter) {
            return true;
          }

          if (filter.apply) {
            return filter.apply(product);
          } else if (filter.name) {
            return !!product.details[filter.name];
          }

          return false;
        });
      });
    }

    return filteredProducts;
  }
);

export const selectFavoriteIds = state => state.favorites.productIds;

export const selectFavoriteProducts = createSelector(
  [selectProducts, selectFavoriteIds],
  (products, favoriteIds) => {
    return products.filter(product => favoriteIds.includes(product.id));
  }
);
