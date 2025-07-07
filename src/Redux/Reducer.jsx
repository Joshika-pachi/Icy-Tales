import { createSlice } from "@reduxjs/toolkit";
import productsData from "../Data/AllData";
import { filterProducts } from "./action"; 
const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  filters: {
    category: "All",
    priceRange: [0, 10],
    sort: "default",
    searchTerm: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
      filterProducts(state); 
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
      filterProducts(state);
    },
    setSort: (state, action) => {
      state.filters.sort = action.payload;
      filterProducts(state);
    },
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
      filterProducts(state);
    },
  },
});

export const { setCategory, setPriceRange, setSort, setSearchTerm } =
  productsSlice.actions;

export default productsSlice.reducer;
