import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './slices/shopSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cartItems: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
