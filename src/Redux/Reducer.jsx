import { createSlice } from "@reduxjs/toolkit";
import productsData from "../Data/AllData";

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  filters: {
    category: "All",        
    priceRange: [0, 100],   
    sort: "default",       
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
  },
});

//  This function filters products when filters change
function filterProducts(state) {
  const { category, priceRange, sort } = state.filters;
  let result = [...state.allProducts];

  // Filtering by category
  if (category !== "All") {
    result = result.filter(item => item.category === category);
  }

  // Filtering by price range
  result = result.filter(item =>
    item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  // Sort
  if (sort === "low-to-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "high-to-low") {
    result.sort((a, b) => b.price - a.price);
  }


  state.filteredProducts = result;
}

export const { setCategory, setPriceRange, setSort } = productsSlice.actions;

// Export reducer for store
export default productsSlice.reducer;
