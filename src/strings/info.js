import { customYellow } from "../styles/colours";

export const loseAllDataMessage =
  "you will lose all data entered into this page.";
export const loseUnsavedChangesMessage = "you will lose any unsaved changes.";

export const formDetailsAreTheSameMessage = (name) => {
  return `<span style="font-size:20px";>nothing has been changed in the form, so there is no need to update <span style="color:${customYellow}";>${name}</span>.<br/><br/>please change a field in the form in order to update the database.</span>`;
};
