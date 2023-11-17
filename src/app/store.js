import { configureStore } from '@reduxjs/toolkit';
import innerSearchReducer from '../components/innerSearchComponent/innerSearchSlice';
import selectedDataReducer from '../pages/singlePage/singlePageSlice';
import favouriteReducer from '../pages/Favourites/FavouriteSlice';
import apiReducer from './apiDataSlice';
export const store = configureStore({
  reducer: {
    innerSearch: innerSearchReducer,
    selectedData: selectedDataReducer,
    favorites: favouriteReducer,
    apiData: apiReducer,
  },
});
