import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: null,
    equipment: [],
    type: null,
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
  },
});

export const { setEquipmentFilter, setLocationFilter, setTypeFilter } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
