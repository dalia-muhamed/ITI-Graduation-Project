import { createSlice } from '@reduxjs/toolkit';

const selectedDataSlice = createSlice({
  name: 'selectedData',
  initialState: {
    data: null,
  },
  reducers: {
    setSelectedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSelectedData } = selectedDataSlice.actions;
export default selectedDataSlice.reducer;