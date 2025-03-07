import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    resetCurrentUserErrorMessage(state) {
      state.currentUserError = null;
    },
  },
  extraReducers,
});

export const { resetCurrentUserErrorMessage } = userSlice.actions;
export const userReducer = userSlice.reducer;
