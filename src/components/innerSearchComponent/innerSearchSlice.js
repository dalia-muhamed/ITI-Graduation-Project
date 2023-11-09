import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
  initialSearchState: undefined,
};

const innerSearchSlice = createSlice({
  name: "innerSearch",
  initialState,
  reducers: {
    filteredByName: (state, action) => {
      const { innerInput, responseData } = action.payload;

      const fetched = [
        { name: "cairo", id: "11" },
        { name: "rome", id: "22" },
        { name: "lebanon", id: "33" },
        { name: "dubai", id: "44" },
        { name: "greece", id: "55" },
      ];

      const matchedCity = fetched.some((city) =>
        city.name.toLowerCase().includes(innerInput.toLowerCase())
      );
      console.log(matchedCity);
      let data;
      if (matchedCity) {
        const matchedId = fetched.map((country) => parseInt(country.id));
        data = responseData.filter((item) =>
          matchedId.includes(item.country_id)
        );
        // console.log(data);
      }
      if (!matchedCity) {
        data = responseData.filter((item) =>
          item.name.toLowerCase().includes(innerInput.toLowerCase())
        );
        console.log(data);
      }

      state.initialSearchState = data;
    },
  },
});

export const { filteredByName } = innerSearchSlice.actions;
export default innerSearchSlice.reducer;
