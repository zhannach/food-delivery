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
        (cartItem) => cartItem.id === action.payload.id
      );
      if (findItem && findItem?.count) {
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
        (cartItem) => cartItem.id === action.payload.id
      );

      if (findItem && findItem.count && findItem.count > 1) {
        findItem.count -= 1;
      }
      state.totalPrice = state.cartItems.reduce((sum, cartItem) => {
        return (
          parseInt(cartItem.price) * (cartItem.count ? cartItem.count : 1) + sum
        );
      }, 0);
    },
    removeItem: (state, action) => {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
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

export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
