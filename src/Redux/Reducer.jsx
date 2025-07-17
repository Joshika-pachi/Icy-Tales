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
  cart: [], 
};

const Reducer = createSlice({
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
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: product.quantity ||1  });
      }
    },
    setCartFromFirebase: (state, action) => {
      state.cart = action.payload;
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { setCategory, setPriceRange, setSort, setSearchTerm, addToCart, removeFromCart, incrementQuantity, decrementQuantity, setCartFromFirebase } = Reducer.actions;

export default Reducer.reducer;
