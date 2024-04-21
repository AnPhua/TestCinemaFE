import { createSlice } from "@reduxjs/toolkit";
import comboItems from "../../data/datacombo";

const seatSlice = createSlice({
  name: "cart",
  initialState: {
    items: comboItems,
    amountVIP: 0,
    amountNOR: 0,
  },
  reducers: {
    updateAmountNOR: (state, action) => {
      state.amountNOR = Math.max(0, state.amountNOR + action.payload);
    },
    updateAmountVIP: (state, action) => {
      state.amountVIP = Math.max(0, state.amountVIP + action.payload);
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          const newQuantity = Math.max(0, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },

    resetState: (state) => {
      state.amountNOR = 0;
      state.amountVIP = 0;
    },
  },
});

export const {
  updateAmountNOR,
  updateAmountVIP,
  increase,
  decrease,
  resetState,
} = seatSlice.actions;
export default seatSlice.reducer;
