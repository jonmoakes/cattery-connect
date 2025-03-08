import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const viewPenDataSlice = createSlice({
  name: "viewPenData",
  initialState: INITIAL_STATE,
  reducers: {
    resetViewPenDataState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const { resetViewPenDataState } = viewPenDataSlice.actions;

export const viewPenDataReducer = viewPenDataSlice.reducer;
