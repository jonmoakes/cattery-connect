import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultSignUpFormDetails = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
const INITIAL_STATE = {
  signUpFormDetails: defaultSignUpFormDetails,
};

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
  selectors: {
    selectSignUpFormSelectors: createSelector(
      (state) => state.signUpFormDetails,
      (signUpFormDetails) => {
        return {
          signUpFormDetails,
        };
      }
    ),
  },
});

export const { setSignUpFormDetails, resetSignUpFormState } =
  signUpFormSlice.actions;
export const { selectSignUpFormSelectors } = signUpFormSlice.selectors;

export const signUpFormReducer = signUpFormSlice.reducer;
