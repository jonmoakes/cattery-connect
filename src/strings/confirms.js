import { customYellow } from "../styles/colours";

export const confirmSureMessage = "are you sure?";
export const imSureMessage = "i'm sure";
export const confirmSignOutMessage = "are you sure you want to sign out?";
export const yesSignOutMessage = "yes, sign out";
export const confirmUploadDatesAndPensDataMessage =
  "upload these dates and pens data?";
export const confirmDeleteCustomerMessage = (name) => {
  return `<span style="font-size:20px";>are you sure that you want to delete<br/><span style="color:${customYellow}";>${name}</span><br/>from the database?<br/><br/>this action cannot be undone.</span>`;
};
