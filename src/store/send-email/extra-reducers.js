import {
  sendCustomerCancellationEmailAsync,
  sendEmailCatteryConnectDeleteBookingDataFailedAsync,
  sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync,
  sendEmailCatteryConnectSendCustomerEmailReceiptAsync,
  sendEmailCatteryConnectUpdatePensRollbackErrorAsync,
  sendEmailContactFormMessageAsync,
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
  handleAsyncAction(
    builder,
    sendEmailCatteryConnectUpdatePensRollbackErrorAsync
  );
  handleAsyncAction(
    builder,
    sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync
  );
  handleAsyncAction(
    builder,
    sendEmailCatteryConnectSendCustomerEmailReceiptAsync
  );
  handleAsyncAction(
    builder,
    sendEmailCatteryConnectDeleteBookingDataFailedAsync
  );
  handleAsyncAction(builder, sendCustomerCancellationEmailAsync);
  handleAsyncAction(builder, sendEmailContactFormMessageAsync);
};
