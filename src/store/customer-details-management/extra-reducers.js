import {
  addCustomerAsync,
  deleteCustomerAsync,
  deleteCustomersCatsAsync,
  editCustomerAsync,
} from "./customer-details-management.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(addCustomerAsync.pending, (state) => {
      state.customerDetailsManagementIsLoading = true;
    })
    .addCase(addCustomerAsync.fulfilled, (state) => {
      state.customerDetailsManagementIsLoading = false;
      state.addCustomerResult = "fulfilled";
      state.addCustomerError = null;
    })
    .addCase(addCustomerAsync.rejected, (state, action) => {
      state.customerDetailsManagementIsLoading = false;
      state.addCustomerResult = "rejected";
      state.addCustomerError = action.payload;
    })
    .addCase(editCustomerAsync.pending, (state) => {
      state.customerDetailsManagementIsLoading = true;
    })
    .addCase(editCustomerAsync.fulfilled, (state) => {
      state.customerDetailsManagementIsLoading = false;
      state.editCustomerResult = "fulfilled";
      state.editCustomerError = null;
    })
    .addCase(editCustomerAsync.rejected, (state, action) => {
      state.customerDetailsManagementIsLoading = false;
      state.editCustomerResult = "rejected";
      state.editCustomerError = action.payload;
    })
    .addCase(deleteCustomersCatsAsync.pending, (state) => {
      state.deleteCustomersCatsIsLoading = true;
    })
    .addCase(deleteCustomersCatsAsync.fulfilled, (state) => {
      state.deleteCustomersCatsIsLoading = false;
      state.deleteCustomersCatsResult = "fulfilled";
      state.deleteCustomersCatsError = null;
    })
    .addCase(deleteCustomersCatsAsync.rejected, (state, action) => {
      state.deleteCustomersCatsIsLoading = false;
      state.deleteCustomersCatsResult = "rejected";
      state.deleteCustomersCatsError = action.payload;
    })
    .addCase(deleteCustomerAsync.pending, (state) => {
      state.customerDetailsManagementIsLoading = true;
    })
    .addCase(deleteCustomerAsync.fulfilled, (state) => {
      state.customerDetailsManagementIsLoading = false;
      state.deleteCustomerResult = "fulfilled";
      state.deleteCustomerError = null;
    })
    .addCase(deleteCustomerAsync.rejected, (state, action) => {
      state.customerDetailsManagementIsLoading = false;
      state.deleteCustomerResult = "rejected";
      state.deleteCustomerError = action.payload;
    });
};
