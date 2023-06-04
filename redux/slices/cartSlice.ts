import { Dish } from "@/types/shops";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: Dish[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.title === action.payload.title
      );
      if (findItem && findItem.count) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce((sum, cartItem) => {
        return (
          parseInt(cartItem.price) * (cartItem.count ? cartItem.count : 1) + sum
        );
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.title === action.payload.title
      );
      if (findItem && findItem.count) findItem.count--;
      state.totalPrice = state.cartItems.reduce((sum, cartItem) => {
        return (
          parseInt(cartItem.price) * (cartItem.count ? cartItem.count : 1) + sum
        );
      }, 0);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.title !== action.payload.title
      );
      state.totalPrice = state.cartItems.reduce((sum, cartItem) => {
        return (
          parseInt(cartItem.price) * (cartItem.count ? cartItem.count : 1) + sum
        );
      }, 0);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
