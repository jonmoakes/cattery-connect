import {
  allCustomersRoute,
  viewCustomersCatsRoute,
  allCatsRoute,
  bookingsRoute,
  dailyScheduleRoute,
  incomeRoute,
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
    case dailyScheduleRoute:
      return "Schedule";
    case incomeRoute:
      return "Income";
    default:
      return "";
  }
};
