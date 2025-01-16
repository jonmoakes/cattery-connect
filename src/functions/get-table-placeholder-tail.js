import { allCustomersRoute, viewCustomersCatsRoute } from "../strings/routes";

export const getTablePlaceholderTail = (path) => {
  switch (path) {
    case allCustomersRoute:
      return "Customers";
    case viewCustomersCatsRoute:
      return "Cats";
    default:
      return "";
  }
};
