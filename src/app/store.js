import { configureStore } from '@reduxjs/toolkit';
import innerSearchReducer from '../components/innerSearchComponent/innerSearchSlice';

export const store = configureStore({
  reducer: {
    innerSearch: innerSearchReducer,
  },
});
