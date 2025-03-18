import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState: INITIAL_STATE,
  reducers: {
    setContactFormDetails(state, action) {
      state.contactFormDetails = action.payload;
    },
    resetContactFormDetails(state) {
      state.contactFormDetails = {};
    },
    resetGetCatteryEmailError(state) {
      state.getCatteryEmailError = null;
    },
    resetSendEmailState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setContactFormDetails,
  resetContactFormDetails,
  resetGetCatteryEmailError,
  resetSendEmailState,
} = sendEmailSlice.actions;

export const sendEmailReducer = sendEmailSlice.reducer;
