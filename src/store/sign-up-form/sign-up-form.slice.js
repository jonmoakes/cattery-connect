import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";

export const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignUpFormDetails(state, action) {
      state.signUpFormDetails = action.payload;
    },
    resetSignUpFormState: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setSignUpFormDetails, resetSignUpFormState } =
  signUpFormSlice.actions;
export const signUpFormReducer = signUpFormSlice.reducer;
