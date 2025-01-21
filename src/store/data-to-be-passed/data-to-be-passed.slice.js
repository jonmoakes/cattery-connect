import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  dataToBePassed: {},
  customerToEditDetails: {},
};

export const dataToBePassedSlice = createSlice({
  name: "dataToBePassed",
  initialState: INITIAL_STATE,
  reducers: {
    setDataToBePassed(state, action) {
      state.dataToBePassed = action.payload;
    },
    setCustomerToEditDetails(state, action) {
      state.customerToEditDetails = action.payload;
    },
    resetCustomerToEditDetails(state) {
      state.customerToEditDetails = {};
    },
    resetDataToBePassedState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDataToBePassedSelectors: createSelector(
      (state) => state.dataToBePassed,
      (state) => state.customerToEditDetails,
      (dataToBePassed, customerToEditDetails) => {
        return {
          dataToBePassed,
          customerToEditDetails,
        };
      }
    ),
  },
});

export const {
  setDataToBePassed,
  setCustomerToEditDetails,
  resetCustomerToEditDetails,
  resetDataToBePassedState,
} = dataToBePassedSlice.actions;
export const { selectDataToBePassedSelectors } = dataToBePassedSlice.selectors;

export const dataToBePassedReducer = dataToBePassedSlice.reducer;
