import { createSelector } from '@reduxjs/toolkit';
import { equipmentFilters } from '../common/filters/equipment-filters.js';

export const selectProducts = state => state.products.items;

export const selectProduct = (state, productId) =>
  state.products.items.find(item => item.id === productId);

export const selectFilters = state => state.filters;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    let filteredProducts = products.slice(0);

    if (filters.location) {
      filteredProducts = filteredProducts.filter(product =>
        product.location.toLowerCase().includes(filters.location)
      );
    }

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

    if (filters.type) {
      filteredProducts = filteredProducts.filter(
        product => product.type === filters.type
      );
    }

    return filteredProducts;
  }
);
