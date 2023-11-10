import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favorites: [],
};
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const favorite = action.payload;
      state.favorites.push(favorite);
    },
    removeFromFavorites: (state, action) => {
      const favoriteId = action.payload;
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteId
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
