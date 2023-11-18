import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  initialSearchState: [],
};

const apiDataSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getData: (state, action) => {
      const { data } = action.payload;
      state.initialSearchState = data;
    },
  },
});

export const { getData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
