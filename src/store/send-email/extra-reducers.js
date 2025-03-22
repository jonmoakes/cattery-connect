import {
  getCatteryEmailAsync,
  sendCustomerCancellationEmailAsync,
  sendEmailDeleteBookingDataFailedAsync,
  sendEmailPensUpdatedBookingDataFailedAsync,
  sendEmailSendCustomerEmailReceiptAsync,
  sendEmailUpdatePensRollbackErrorAsync,
  sendEmailContactFormMessageAsync,
  sendEmailFailedStatusUpdateAfterSuccessfulPaymentAsync,
} from "./send-email.thunks";

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.sendEmailIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
      state.sendEmailIsLoading = false;
      state.sendEmailStatusCode = action.payload;
      state.sendEmailError = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.sendEmailIsLoading = false;
      state.sendEmailStatusCode = "";
      state.sendEmailError = action.payload;
    });
};

export const extraReducers = (builder) => {
  handleAsyncAction(builder, sendEmailUpdatePensRollbackErrorAsync);
  handleAsyncAction(builder, sendEmailPensUpdatedBookingDataFailedAsync);
  handleAsyncAction(builder, sendEmailSendCustomerEmailReceiptAsync);
  handleAsyncAction(builder, sendEmailDeleteBookingDataFailedAsync);
  handleAsyncAction(builder, sendCustomerCancellationEmailAsync);
  handleAsyncAction(builder, sendEmailContactFormMessageAsync);
  handleAsyncAction(
    builder,
    sendEmailFailedStatusUpdateAfterSuccessfulPaymentAsync
  );
  builder
    .addCase(getCatteryEmailAsync.pending, (state) => {
      state.getCatteryEmailIsLoading = true;
    })
    .addCase(getCatteryEmailAsync.fulfilled, (state, action) => {
      state.getCatteryEmailIsLoading = false;
      state.getCatteryEmailResult = "fulfilled";
      state.catteryEmail = action.payload;
      state.getCatteryEmailError = null;
    })
    .addCase(getCatteryEmailAsync.rejected, (state, action) => {
      state.getCatteryEmailIsLoading = false;
      state.getCatteryEmailResult = "rejected";
      state.catteryEmail = "";
      state.getCatteryEmailError = action.payload;
    });
};
