import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../services/Customize-axios";

export const getAllFoodRedux = createAsyncThunk("getAllFoodredux", async () => {
  try {
    const response = await axios.get(
      "api/admin/GetAllFoods?PageNumber=1&PageSize=10"
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export const foodDetails = createSlice({
  name: "foodDetails",
  initialState: {
    foods: [],
    loading: false,
    error: null,
    amountVIP: 0,
    amountNOR: 0,
    amountDOU: 0,
  },
  reducers: {
    updateAmountNOR: (state, action) => {
      state.amountNOR = Math.max(0, state.amountNOR + action.payload);
    },
    updateAmountVIP: (state, action) => {
      state.amountVIP = Math.max(0, state.amountVIP + action.payload);
    },
    updateAmountDOU: (state, action) => {
      state.amountDOU = Math.max(0, state.amountDOU + action.payload);
    },
    increase: (state, action) => {
      state.foods = state.foods.map((item) => {
        if (item.id === action.payload) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.foods = state.foods.map((item) => {
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

  extraReducers: (builder) => {
    builder
      .addCase(getAllFoodRedux.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFoodRedux.fulfilled, (state, action) => {
        state.loading = false;
        state.foods = action.payload;
      })
      .addCase(getAllFoodRedux.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
  updateAmountNOR,
  updateAmountVIP,
  updateAmountDOU,
  increase,
  decrease,
  resetState,
} = foodDetails.actions;
export default foodDetails.reducer;
