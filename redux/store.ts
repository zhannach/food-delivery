import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import shopReducer from "./slices/shopSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartItems"],
};

export const appReducer = combineReducers({
  shop: shopReducer,
  cartItems: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
