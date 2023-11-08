import { configureStore } from '@reduxjs/toolkit';
import innerSearchReducer from '../components/innerSearchComponent/innerSearchSlice';
import selectedDataReducer from '../pages/singlePage/singlePageSlice'

export const store = configureStore({
  reducer: {
    innerSearch: innerSearchReducer,
    selectedData: selectedDataReducer,
  },
});
