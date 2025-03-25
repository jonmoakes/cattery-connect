import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

const incomeSlice = createSlice({
  name: "income",
  initialState: INITIAL_STATE,
  reducers: {
    setMonthOffset: (state, action) => {
      state.monthOffset = action.payload;
    },
    resetIncomeData(state) {
      state.incomeData = null;
    },
    resetIncomeDataError(state) {
      state.incomeDataError = null;
    },
    resetIncomeDataState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setMonthOffset,
  resetIncomeData,
  resetIncomeDataError,
  resetIncomeDataState,
} = incomeSlice.actions;

export const incomeReducer = incomeSlice.reducer;
