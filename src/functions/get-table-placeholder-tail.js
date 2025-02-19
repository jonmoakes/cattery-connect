import {
  allCustomersRoute,
  viewCustomersCatsRoute,
  allCatsRoute,
  bookingsRoute,
} from "../strings/routes";

export const getTablePlaceholderTail = (path) => {
  switch (path) {
    case allCustomersRoute:
      return "Customers";
    case viewCustomersCatsRoute:
    case allCatsRoute:
      return "Cats";
    case bookingsRoute:
      return "Bookings";
    default:
      return "";
  }
};
