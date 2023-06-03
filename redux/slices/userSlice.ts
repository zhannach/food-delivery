import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  name: string;
  email: string;
  phone: number;
  address: string;
}

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  phone: 0,
  address: "",
};

export const shopSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const { setUser } = shopSlice.actions;

export default shopSlice.reducer;
