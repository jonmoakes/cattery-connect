import { customYellow } from "../styles/colours";

export const loseAllDataMessage =
  "you will lose all data entered into this page.";
export const loseUnsavedChangesMessage = "you will lose any unsaved changes.";

export const paymentStatusUpdatedMessage = `<span style="font-size:20px";>status updated! <br/><br/>you should see the new status reflected in the table straight away.<br/><br/>if you do not, please reload the page.</span>`;

export const formDetailsAreTheSameMessage = (name) => {
  return `<span style="font-size:20px";>nothing has been changed in the form, so there is no need to update <span style="color:${customYellow}";>${name}</span>.<br/><br/>please change a field in the form in order to update the database.</span>`;
};
export const signOutSoCanSignInWithNewPasswordMessage =
  "we will now sign you out so that you can sign in with your new password.";
export const passwordResetSuccessMessage =
  "your password has been successfuly reset!";
export const signInWithNewPasswordMessage =
  "you can now sign in with your new password.";

export const updatePenRollbackErrorEmailSentMessage = `<span style="font-size:20px";> email sent!<br/><br/>jonathan will contact you shortly to explain the error that occured in more detail!<br/><br/>as a reminder, please don't attempt to make or cancel any more bookings until the issue has been fixed.</span>`;

export const pensUpdatedUploadBookingDataFailedEmailSentMessage = `<span style="font-size:20px";> email sent!<br/><br/>jonathan will diagnose the error and then manually update the database.<br/><br/>he will contact you as soon as it has been done and you will also see the booking appear in your bookings table as soon as it has been manually uploaded.<br/><br/>we apologise for the inconvenience!</span>`;

export const pensUpdatedDeleteBookingDataFailedEmailSentMessage = `<span style="font-size:20px";> email sent!<br/><br/>jonathan will diagnose the error and then manually update the database.<br/><br/>he will contact you as soon as it has been done and you will also see the booking disappear in your bookings table as soon as it has been manually deleted.<br/><br/>we apologise for the inconvenience!</span>`;
export const emailResponseTimeMessage =
  "Your Message Has Been Sent! We aim to respond to your email within 24hrs.";

export const paymentSuccessfulMessage = "payment successful!";

export const paymentSuccessfulButStatusNotUpdatedMessage = `<span style="font-size:20px";>payment successful!<br/><br/><span style="color:${customYellow}";>important - please read!</span><br/><br/>although the payment was successful, we had an error updating the payment status in our database.<br/><br/>please tap the 'report error' button below which will notify the app admin of the error so that it can be fixed.<br/><br/>please <span style="color:${customYellow}";>DO NOT</span> attempt to make the payment again as we can confirm that it has been successful and your card has been charged.<br/><br/>we apologise for the inconvenience!</span>`;
export const emailSentAfterPaymentStatusUpdateMessage = `<span style="font-size:20px";>email sent!<br/><br/>if you do not see the payment status of your booking updated within 24hrs, please contact your cattery.<br/><br/>as a reminder, please DO NOT attempt to make the payment for this booking again as it has been successful.</span>`;
export const paymentCompleteMessage = `<span style="font-size:20px";>thank you - payment successful!<br/><br/>you will shortly receive an email confirmation of your payment.</span>`;
