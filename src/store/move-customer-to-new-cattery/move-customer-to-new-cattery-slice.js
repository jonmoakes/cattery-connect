import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const moveCustomerToNewCatterySlice = createSlice({
  name: "moveCustomerToNewCattery",
  initialState: INITIAL_STATE,
  reducers: {
    setCustomerId(state, action) {
      state.customerId = action.payload;
    },
    setNewCatteryId(state, action) {
      state.newCatteryId = action.payload;
    },
    resetUpdateCustomerCatteryIdResult(state) {
      state.updateCustomerCatteryIdResult = "";
    },
    resetUpdateCustomerCatteryIdError(state) {
      state.updateCustomerCatteryIdError = null;
    },
    resetMoveCustomerToNewCatteryState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setCustomerId,
  setNewCatteryId,
  resetUpdateCustomerCatteryIdResult,
  resetUpdateCustomerCatteryIdError,
  resetMoveCustomerToNewCatteryState,
} = moveCustomerToNewCatterySlice.actions;

export const moveCustomerToNewCatteryReducer =
  moveCustomerToNewCatterySlice.reducer;
