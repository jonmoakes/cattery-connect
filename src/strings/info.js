import { customYellow } from "../styles/colours";

export const loseAllDataMessage =
  "you will lose all data entered into this page.";
export const loseUnsavedChangesMessage = "you will lose any unsaved changes.";

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
