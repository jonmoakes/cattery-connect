import {
  allCustomersRoute,
  viewCustomersCatsRoute,
  allCatsRoute,
} from "../strings/routes";

export const getTablePlaceholderTail = (path) => {
  switch (path) {
    case allCustomersRoute:
      return "Customers";
    case viewCustomersCatsRoute:
    case allCatsRoute:
      return "Cats";
    default:
      return "";
  }
};
