import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const favorite = action.payload;
      state.favorites.push(favorite);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action) => {
      const favoriteId = action.payload;
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteId
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
