import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const chooseNewPasswordSlice = createSlice({
  name: "chooseNewPassword",
  initialState: INITIAL_STATE,
  reducers: {
    setNewPasswordDetails(state, action) {
      state.newPasswordDetails = action.payload;
    },
    resetPasswordResultError(state) {
      state.newPasswordError = null;
    },
    resetChooseNewPasswordState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setNewPasswordDetails,
  resetPasswordResultError,
  resetChooseNewPasswordState,
} = chooseNewPasswordSlice.actions;

export const chooseNewPasswordReducer = chooseNewPasswordSlice.reducer;
