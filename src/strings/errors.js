import { customYellow, warmBeige } from "../styles/colours";

export const noNetworkMessage =
  "you don't seem to be connected to the internet. Please check your connection";

export const invalidEmailErrorMessage =
  "the email that you have entered is an invalid email address.";
export const missingFieldsMessage = `<span style="font-size:20px";>please make sure that you have completed all fields that are marked with a '<span style="color:red";>*</span>'.</span>`;

export const passwordsDontMatchMessage =
  "your passwords don't match. Please try again.";
export const passwordCantContainSpaceMessage =
  "passwords can't contain a space ( ' ' ). please try again.";
export const appwriteNoUserError =
  "User (role: guests) missing scope (account)";
export const passwordLengthErrorMessage =
  "your password must be at least 8 characters long";

export const appwriteCredentialsError =
  "Invalid credentials. Please check the email and password.";
export const appwritePasswordLengthError =
  "Invalid `password` param: Password must be between 8 and 256 characters long.";

export const errorReceivedMessage = (errorInfo, error) => {
  return `<span style="font-size:20px";>${errorInfo}<br/><br/>The error received was:<br/>'<span style="color:${warmBeige}";>${error}</span>'<br/><br/><span style="font-size:20px";>please try again or contact us if the error persists.</span>`;
};
export const catsDeletedCustomerDeletionFailedMessage = (
  deleteCustomerError
) => {
  return `<span style="font-size:20px";>sorry, there was an error.<br/><br/>The customer's cats were deleted, but the customer was not.<br/><br/>please try again and if the error persists, screenshot or make a note of the following customer iD:<br/><span style="color:${warmBeige}";>${deleteCustomerError.customerDocumentId}</span><br/>and contact jonathan quoting it.<br/><br/>The error received was:<br/>'<span style="color:${warmBeige}";>${deleteCustomerError.message}</span>'</span>`;
};

export const contactFormErrorMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error sending the message.<br/><br/>The error received was:<br/>'<span style="color:${warmBeige}";>${error}</span>'<br/><br/><span style="font-size:20px";>please try again or find our email address in the 'account' section of our app and manually send us an email.<br/><br/>we apologise for the inconvenience.</span>`;
};

export const updatePensDataErrorMessage = (
  errorInfo,
  updatePensDataErrorMessage
) => {
  return `<span style="font-size:20px";>${errorInfo}<br/><br/><span style="color:${customYellow}";>${updatePensDataErrorMessage}</span>'</span>`;
};

export const pensUpdatedBookingDataNotAddedErrorMessage = `<span style="font-size:20px";>the pens data was successfully updated but booking data was not uploaded to the database.<br/><br/>when you tap 'send email' below, we will send jonathan details of the error so he can update the database manually.</span>`;

export const pensUpdatedBookingDataNotDeletedErrorMessage = `<span style="font-size:20px";>the pens data was successfully updated but booking data was not deleted from the database.<br/><br/>when you tap 'send email' below, we will send jonathan details of the error so he can update the database manually.</span>`;
export const cantIncludeCommaMessage = "names can't include a comma";
export const appwriteUserNotFoundMessage =
  "User with the requested ID could not be found.";
export const emailAddressNotInDatabase =
  "the email address you entered does not match any email in our database.";
export const passwordErrorMessage = "password error";
export const passwordErrorInstructions =
  "please check your password and try again";
export const enterPhoneNumberMessage = "please enter a phone number.";
export const phoneLengthErrorMessage =
  "the phone number should be 11 digits long.";
export const phoneNumberIncludesSpaceErrorMessage =
  "please don't include a space in the phone number.";
export const couldntFindDocIdMessage =
  "couldn't find details needed for deletion. pleasd reload the page and try again.";
export const paymentDeclinedMessage = (message) => {
  return `<span style="font-size:20px";>sorry, there was an error making the payment.<br/><br/>Your card has<br/>not been charged.<br/><br/> the error received was:<br/><br/> <span style="color:${customYellow}";>'${message}'</span><br/><br/>please tap the ok button below and then try again.</span>`;
};
export const noStripePublicKeyFoundMessage = `<span style="font-size:20px";>no stripe public key found for this cattery.<br/><br/>please contact your cattery for assistance.</span>`;
export const emailFailedToSendMessage = `<span style="font-size:20px";>sorry, the email failed to send..<br/><br/>please contact your cattery as soon as possible and inform them of the error.</span>`;
export const errorUpdatingCatsCatteryIdsMessage = `<span style="font-size:20px";>There was an error updating the cats' cattery IDs Update the DB manually</span>`;
