import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./inital-state";
import { extraReducers } from "./extra-reducers";

export const generateNewPasswordRequestSlice = createSlice({
  name: "generateNewPasswordRequest",
  initialState: INITIAL_STATE,
  reducers: {
    setGenerateNewPasswordRequestEmail(state, action) {
      state.generateNewPasswordRequestEmail = action.payload;
    },
    resetGenerateNewPasswordRequestState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setGenerateNewPasswordRequestEmail,
  resetGenerateNewPasswordRequestState,
} = generateNewPasswordRequestSlice.actions;

export const generateNewPasswordRequestReducer =
  generateNewPasswordRequestSlice.reducer;
