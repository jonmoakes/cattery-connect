import { fetchIndividualCustomersCatsAsync } from "./get-individual-customers-cats.thunks";

export const extraReducers = (builder) => {
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
};
