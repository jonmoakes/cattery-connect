import { customYellow } from "../styles/colours";

export const confirmSureMessage = "are you sure?";
export const imSureMessage = "i'm sure";
export const confirmSignOutMessage = "are you sure you want to sign out?";
export const yesSignOutMessage = "yes, sign out";
export const confirmUploadDatesAndPensDataMessage =
  "upload these dates and pens data?";
export const confirmDeleteMessage = (name) => {
  return `<span style="font-size:20px";>are you sure that you want to delete<br/><span style="color:${customYellow}";>${name}</span><br/>from the database?<br/><br/>this action cannot be undone.</span>`;
};
export const confirmAddCatMessage = (catsName) => {
  return `<span style="font-size:20px";>are you sure that you want to add<br/><span style="color:${customYellow}";>${catsName}</span><br/>to the database?</span>`;
};
export const confirmEditCatMessage =
  "are you sure you want to edit this cat with the new details?";
