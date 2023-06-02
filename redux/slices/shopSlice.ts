import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ShopState {
  id: string;
}

const initialState: ShopState = {
  id: "1",
};

export const shopSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = shopSlice.actions;

export default shopSlice.reducer;
