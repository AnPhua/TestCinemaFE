import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "cart",
  initialState: {
    seats: [],
    amountVIP: 0,
    amountNOR: 0,
  },
  reducers: {
    updateAmountNOR: (state, action) => {
      state.amountNOR += action.payload;
    },
    updateAmountVIP: (state, action) => {
      state.amountVIP += action.payload;
    },
    resetState: (state) => {
      state.amountNOR = 0;
      state.amountVIP = 0;
    },
  },
});
export const { updateAmountNOR, updateAmountVIP, resetState } =
  seatSlice.actions;
export default seatSlice.reducer;
