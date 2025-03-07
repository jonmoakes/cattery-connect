import { getAllOwnersCustomersAsync } from "./get-all-customers.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(getAllOwnersCustomersAsync.pending, (state) => {
      state.getAllCustomersIsLoading = true;
    })
    .addCase(getAllOwnersCustomersAsync.fulfilled, (state, action) => {
      state.getAllCustomersIsLoading = false;
      state.allCustomers = action.payload;
      state.getAllCustomersError = null;
    })
    .addCase(getAllOwnersCustomersAsync.rejected, (state, action) => {
      state.getAllCustomersIsLoading = false;
      state.allCustomers = [];
      state.getAllCustomersError = action.payload;
    });
};
