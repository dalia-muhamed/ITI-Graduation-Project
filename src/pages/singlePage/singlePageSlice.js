import { createSlice } from "@reduxjs/toolkit";

const selectedDataSlice = createSlice({
  name: "selectedData",
  initialState: {
    data: JSON.parse(localStorage.getItem("reservationData")) || [],
  },
  reducers: {
    setSelectedData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("reservationData", JSON.stringify(state.data));
    },
  },
});

export const { setSelectedData } = selectedDataSlice.actions;
export default selectedDataSlice.reducer;
