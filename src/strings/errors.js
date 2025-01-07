import { warmBeige } from "../styles/colours";

export const noNetworkMessage =
  "you don't seem to be connected to the internet. Please check your connection";

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

export const cantIncludeCommaMessage = "names can't include a comma";
export const appwriteUserNotFoundMessage =
  "User with the requested ID could not be found.";
export const emailAddressNotInDatabase =
  "the email address you entered does not match any email in our database.";
export const passwordErrorMessage = "password error";
export const passwordErrorInstructions =
  "please check your password and try again";
