import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchIndividualCustomersCatsAsync } from "./get-individual-customers-cats.thunks";

const INITIAL_STATE = {
  individualCustomersCatsIsLoading: false,
  individualCustomersCats: undefined,
  individualCustomersCatsError: null,
};

export const individualCustomersCatsSlice = createSlice({
  name: "individualCustomersCats",
  initialState: INITIAL_STATE,
  reducers: {
    setIndividualCustomersCats(state, action) {
      state.individualCustomersCats = action.payload;
    },
    resetindividualCustomersCatsError(state) {
      state.individualCustomersCatsError = null;
    },
    resetIndividualCustomersCatsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectIndividualCustomersCatsSelectors: createSelector(
      (state) => state.individualCustomersCatsIsLoading,
      (state) => state.individualCustomersCats,
      (state) => state.individualCustomersCatsError,
      (
        individualCustomersCatsIsLoading,
        individualCustomersCats,
        individualCustomersCatsError
      ) => {
        return {
          individualCustomersCatsIsLoading,
          individualCustomersCats,
          individualCustomersCatsError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndividualCustomersCatsAsync.pending, (state) => {
        state.individualCustomersCatsIsLoading = true;
      })
      .addCase(fetchIndividualCustomersCatsAsync.fulfilled, (state, action) => {
        state.individualCustomersCatsIsLoading = false;
        state.individualCustomersCats = action.payload;
        state.individualCustomersCatsError = null;
      })
      .addCase(fetchIndividualCustomersCatsAsync.rejected, (state, action) => {
        state.individualCustomersCatsIsLoading = false;
        state.individualCustomersCats = [];
        state.individualCustomersCatsError = action.payload;
      });
  },
});

export const {
  setIndividualCustomersCats,
  resetindividualCustomersCatsError,
  resetIndividualCustomersCatsState,
} = individualCustomersCatsSlice.actions;
export const { selectIndividualCustomersCatsSelectors } =
  individualCustomersCatsSlice.selectors;

export const individualCustomersCatsReducer =
  individualCustomersCatsSlice.reducer;
