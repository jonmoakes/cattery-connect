import {
  checkCustomerCanBeMovedAsync,
  updateCustomersCatteryIdAsync,
  updateCustomersCatsCatteryIdsAsync,
} from "./move-customer-to-new-cattery-thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(checkCustomerCanBeMovedAsync.pending, (state) => {
      state.checkCustomerCanBeMovedIsLoading = true;
    })
    .addCase(checkCustomerCanBeMovedAsync.fulfilled, (state, action) => {
      state.checkCustomerCanBeMovedIsLoading = false;
      state.checkCustomerCanBeMovedResult = action.payload;
      state.checkCustomerCanBeMovedError = null;
    })
    .addCase(checkCustomerCanBeMovedAsync.rejected, (state, action) => {
      state.checkCustomerCanBeMovedIsLoading = false;
      state.checkCustomerCanBeMovedResult = null;
      state.checkCustomerCanBeMovedError = action.payload;
    })
    .addCase(updateCustomersCatteryIdAsync.pending, (state) => {
      state.updateCustomerCatteryIdIsLoading = true;
    })
    .addCase(updateCustomersCatteryIdAsync.fulfilled, (state) => {
      state.updateCustomerCatteryIdIsLoading = false;
      state.updateCustomerCatteryIdResult = "fulfilled";
      state.updateCustomerCatteryIdError = null;
    })
    .addCase(updateCustomersCatteryIdAsync.rejected, (state, action) => {
      state.updateCustomerCatteryIdIsLoading = false;
      state.updateCustomerCatteryIdResult = "rejected";
      state.updateCustomerCatteryIdError = action.payload;
    })
    .addCase(updateCustomersCatsCatteryIdsAsync.pending, (state) => {
      state.updateCatsCatteryIdsIsLoading = true;
    })
    .addCase(updateCustomersCatsCatteryIdsAsync.fulfilled, (state) => {
      state.updateCatsCatteryIdsIsLoading = false;
      state.updateCatsCatteryIdsResult = "fulfilled";
      state.updateCatsCatteryIdsError = null;
    })
    .addCase(updateCustomersCatsCatteryIdsAsync.rejected, (state, action) => {
      state.updateCatsCatteryIdsIsLoading = false;
      state.updateCatsCatteryIdsResult = "rejected";
      state.updateCatsCatteryIdsError = action.payload;
    });
};
