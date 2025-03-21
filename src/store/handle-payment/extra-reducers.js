import { attemptPaymentAsync } from "./handle-payment-thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(attemptPaymentAsync.pending, (state) => {
      state.attemptPaymentIsLoading = true;
    })
    .addCase(attemptPaymentAsync.fulfilled, (state, action) => {
      state.attemptPaymentIsLoading = false;
      state.paymentStatus = action.payload;
      state.paymentError = null;
    })
    .addCase(attemptPaymentAsync.rejected, (state, action) => {
      state.attemptPaymentIsLoading = false;
      state.paymentStatus = null;
      state.paymentError = action.payload;
    });
};
