import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultCustomerDetails = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  emergencyContactDetails: "",
};

const INITIAL_STATE = {
  customerDetails: defaultCustomerDetails,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState: INITIAL_STATE,
  reducers: {
    setCustomerDetails(state, action) {
      state.customerDetails = action.payload;
    },
    resetCustomerState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectCustomerDetailsSelectors: createSelector(
      (state) => state.customerDetails,
      (customerDetails) => {
        return {
          customerDetails,
        };
      }
    ),
  },
});

export const { setCustomerDetails, resetCustomerState } = customerSlice.actions;
export const { selectCustomerDetailsSelectors } = customerSlice.selectors;

export const customerReducer = customerSlice.reducer;
