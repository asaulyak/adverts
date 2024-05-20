import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: null,
    equipment: [],
    type: null,
    page: 1,
    limit: 4,
    searchParams: {},
  },
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload?.trim().toLowerCase() ?? null;
    },

    setEquipmentFilter: (state, action) => {
      const { active, filter } = action.payload;

      if (active) {
        state.equipment = [...state.equipment, filter];
      } else {
        state.equipment = state.equipment.filter(item => item.id !== filter.id);
      }
    },

    setTypeFilter: (state, action) => {
      state.type = action.payload ?? null;
    },

    setPagination: (state, action) => {
      const { page = 1, limit = 4 } = action.payload;

      state.page = page;
      state.limit = limit;
    },

    updateSearchParams: state => {
      const { page, limit, location, type } = state;
      const params = { page, limit, location, type };

      state.searchParams = Object.keys(params).reduce((acc, key) => {
        const value = params[key];

        if (value !== undefined && value !== null) {
          acc[key] = value;
        }

        return acc;
      }, {});
    },

    resetFilters: state => {
      state.location = null;
      state.equipment = [];
      state.type = null;
      state.page = 1;
      state.limit = 4;
      state.searchParams = {};
    },
  },
});

export const { setEquipmentFilter, setLocationFilter, setTypeFilter, setPagination, resetFilters, updateSearchParams} =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
