import { createSelector, createSlice } from "@reduxjs/toolkit";
import { generateNewPasswordRequestAsync } from "./generate-new-password-request.thunks";

const INITIAL_STATE = {
  generateNewPasswordRequestEmail: "",
  generateNewPasswordRequestIsLoading: false,
  generateNewPasswordRequestResult: "",
  generateNewPasswordRequestError: null,
};

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
  selectors: {
    selectGenerateNewPasswordRequestSelectors: createSelector(
      (state) => state.generateNewPasswordRequestEmail,
      (state) => state.generateNewPasswordRequestIsLoading,
      (state) => state.generateNewPasswordRequestResult,
      (state) => state.generateNewPasswordRequestError,
      (
        generateNewPasswordRequestEmail,
        generateNewPasswordRequestIsLoading,
        generateNewPasswordRequestResult,
        generateNewPasswordRequestError
      ) => {
        return {
          generateNewPasswordRequestEmail,
          generateNewPasswordRequestIsLoading,
          generateNewPasswordRequestResult,
          generateNewPasswordRequestError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateNewPasswordRequestAsync.pending, (state) => {
        state.generateNewPasswordRequestIsLoading = true;
      })
      .addCase(generateNewPasswordRequestAsync.fulfilled, (state) => {
        state.generateNewPasswordRequestIsLoading = false;
        state.generateNewPasswordRequestResult = "success";
        state.generateNewPasswordRequestError = null;
      })
      .addCase(generateNewPasswordRequestAsync.rejected, (state, action) => {
        state.generateNewPasswordRequestIsLoading = false;
        state.generateNewPasswordRequestResult = "";
        state.generateNewPasswordRequestError = action.payload;
      });
  },
});

export const {
  setGenerateNewPasswordRequestEmail,
  resetGenerateNewPasswordRequestState,
} = generateNewPasswordRequestSlice.actions;
export const { selectGenerateNewPasswordRequestSelectors } =
  generateNewPasswordRequestSlice.selectors;

export const generateNewPasswordRequestReducer =
  generateNewPasswordRequestSlice.reducer;
