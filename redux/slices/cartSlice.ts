import { Dish } from "@/types/shops";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: Dish[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeItem: (state, action) => {
      state.cartItems.filter((cart) => cart !== action.payload.id);
    },
  },
});

export const { addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
