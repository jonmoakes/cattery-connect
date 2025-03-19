import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const catteryDetailsSlice = createSlice({
  name: "catteryDetails",
  initialState: INITIAL_STATE,
  reducers: {
    resetCatteryDetailsError(state) {
      state.catteryDetailsError = null;
    },
    resetCatteryDetailsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const { resetCatteryDetailsError, resetCatteryDetailsState } =
  catteryDetailsSlice.actions;

export const catteryDetailsReducer = catteryDetailsSlice.reducer;
