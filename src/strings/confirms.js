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

export const confirmSendPasswordResetRequestMessage = (email) => {
  return `<span style="font-size:20px;">Are you sure that you wish to send the password reset request to<br/><span style="color:${customYellow}; text-transform:lowercase;">${email}</span>?</span>`;
};
export const sureResetPasswordMessage =
  "are you sure you wish to reset your password?";
