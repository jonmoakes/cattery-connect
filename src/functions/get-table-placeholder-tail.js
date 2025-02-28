import {
  allCustomersRoute,
  viewCustomersCatsRoute,
  allCatsRoute,
  bookingsRoute,
  todaysScheduleRoute,
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
    case todaysScheduleRoute:
      return "Todays Schedule";
    default:
      return "";
  }
};
