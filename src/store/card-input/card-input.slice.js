import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";

const cardInputSlice = createSlice({
  name: "cardInput",
  initialState: INITIAL_STATE,
  reducers: {
    setShowPaymentForm(state, action) {
      state.showPaymentForm = action.payload;
    },
    setCardInputResult(state, action) {
      state.cardInputResult = action.payload;
    },
    resetCardInputState: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setShowPaymentForm, setCardInputResult, resetCardInputState } =
  cardInputSlice.actions;

export const cardInputReducer = cardInputSlice.reducer;
