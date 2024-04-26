import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../Slice/authSlice";
import cartSlice from "../Slice/cartSlice";
import checkOutSlice from "../Slice/checkOutSlice";
import seatSlice from "../Slice/seatSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice,
    seat: seatSlice,
    checkOut: checkOutSlice.reducer,
  },
});

export default store;
