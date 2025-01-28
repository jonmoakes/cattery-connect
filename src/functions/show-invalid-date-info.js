import { isValidDate } from "./is-valid-date";

export const showInvalidDateInfo = (dateString) => {
  if (dateString && dateString.length > 10) {
    return "date string is too long";
  } else if (
    dateString &&
    dateString.length === 10 &&
    !isValidDate(dateString)
  ) {
    return "date string is not valid.";
  }
  dateString && dateString.length === 10 && !isValidDate(dateString) && true;
};
