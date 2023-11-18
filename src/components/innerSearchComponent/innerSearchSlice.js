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
      if (innerInput) {
        const matched = responseData.filter(item =>
          item.name.toLowerCase().includes(innerInput.toLowerCase())
        );
        state.initialSearchState = matched;
      }
    },
  },
});

export const { filteredByName } = innerSearchSlice.actions;
export default innerSearchSlice.reducer;
