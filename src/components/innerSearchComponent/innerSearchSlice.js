import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  initialSearchState: undefined,
};

const innerSearchSlice = createSlice({
  name: 'innerSearch',
  initialState,
  reducers: {
    filteredByName: (state, action) => {
      const { innerInput, responseData } = action.payload;
      if (!responseData) {
        // Handle the case where responseData is undefined or null
        console.error('responseData is not defined');
        return;
      }
      const data = responseData.filter(item =>
        item.name.toLowerCase().includes(innerInput.toLowerCase())
      );
      state.initialSearchState = data;
    },
  },
});

export const { filteredByName } = innerSearchSlice.actions;
export default innerSearchSlice.reducer;
