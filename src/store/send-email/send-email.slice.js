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
    resetSendEmailState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setContactFormDetails,
  resetContactFormDetails,
  resetSendEmailState,
} = sendEmailSlice.actions;

export const sendEmailReducer = sendEmailSlice.reducer;
