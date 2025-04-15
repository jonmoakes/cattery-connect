import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const updatePriceSlice = createSlice({
  name: "updatePrice",
  initialState: INITIAL_STATE,
  reducers: {
    setNewPricingArray(state, action) {
      state.newPricingArray = action.payload;
    },
    resetUpdatePriceResult(state) {
      state.updatePriceResult = "";
    },
    resetUpdatePriceError(state) {
      state.updatePriceError = null;
    },
    resetUpdatePriceState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setNewPricingArray,
  resetUpdatePriceResult,
  resetUpdatePriceError,
  resetUpdatePriceState,
} = updatePriceSlice.actions;

export const updatePriceReducer = updatePriceSlice.reducer;
