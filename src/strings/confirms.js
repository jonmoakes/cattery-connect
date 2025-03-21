import { customYellow } from "../styles/colours";

export const confirmSureMessage = "are you sure?";
export const imSureMessage = "i'm sure";
export const confirmSignOutMessage = "are you sure you want to sign out?";
export const yesSignOutMessage = "yes, sign out";
export const confirmUploadDatesAndPensDataMessage =
  "upload these dates and pens data?";
export const confirmDeleteMessage = (name, type) => {
  return `<span style="font-size:20px";>are you sure that you want to delete<br/><span style="color:${customYellow}";>${name}</span><br/>from the database?${
    type === "customer"
      ? `<br/><br/>this will also delete <span style="color:${customYellow}";>all of their cats details.</span>`
      : ""
  }<br/><br/>this action cannot be undone.</span>`;
};
export const confirmAddDataMessage = (name) => {
  return `<span style="font-size:20px";>are you sure that you want to add<br/><span style="color:${customYellow}";>${name}</span><br/>to the database?</span>`;
};
export const confirmEditDataMessage = (name) => {
  return `<span style="font-size:20px";>are you sure you want to update<br/><span style="color:${customYellow}";>${name}</span><br/>with these new details?</span>`;
};

export const confirmUpdatePaymentStatusMessage = (value, valueToUpdateTo) => {
  return `<span style="font-size:20px";>are you sure you want to change the payment status of this booking from <span style="color:${customYellow}";>${value}</span> to <span style="color:${customYellow}";>${valueToUpdateTo}</span>?</span>`;
};

export const confirmSendPasswordResetRequestMessage = (email) => {
  return `<span style="font-size:20px;">Are you sure that you wish to send the password reset request to<br/><span style="color:${customYellow}; text-transform:lowercase;">${email}</span>?</span>`;
};
export const sureResetPasswordMessage =
  "are you sure you wish to reset your password?";

export const bookingCompletedSendEmailQuestionMessage = `<span style="font-size:20px";> booking completed!<br/><br/>would you like to send the customer an email confirmation?</span>`;

export const confirmMakePaymentMessage = (priceForUi, catteryName) => {
  return `<span style="font-size:20px;">are you sure you want to make this payment of<br/><span style="color:${customYellow};">£${priceForUi}</span><br/>to<br/><span style="color:${customYellow};">${catteryName}</span> ?</span>`;
};
