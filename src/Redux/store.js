import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Reducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
