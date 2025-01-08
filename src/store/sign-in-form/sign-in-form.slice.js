import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultSignInFormDetails = {
  email: "",
  password: "",
};
const INITIAL_STATE = {
  signInFormDetails: defaultSignInFormDetails,
};

export const signInFormSlice = createSlice({
  name: "signInForm",
  initialState: INITIAL_STATE,
  reducers: {
    setSignInFormDetails(state, action) {
      state.signInFormDetails = action.payload;
    },
    resetSignInFormState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectSignInFormSelectors: createSelector(
      (state) => state.signInFormDetails,

      (signInFormDetails) => {
        return {
          signInFormDetails,
        };
      }
    ),
  },
});

export const { setSignInFormDetails, resetSignInFormState } =
  signInFormSlice.actions;
export const { selectSignInFormSelectors } = signInFormSlice.selectors;

export const signInFormReducer = signInFormSlice.reducer;
