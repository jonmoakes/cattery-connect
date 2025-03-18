import {
  signInRoute,
  aboutRoute,
  contactRoute,
  accountRoute,
  allCustomersRoute,
  allCatsRoute,
  allUsersRoute,
  bookingsRoute,
  dailyScheduleRoute,
  signUpRoute,
  signedInCustomersBookingsRoute,
  signedInCustomersDetailsRoute,
  signedInCustomersCatsRoute,
} from "../../strings/routes";

export const signedInRoutes = [
  dailyScheduleRoute,
  bookingsRoute,
  allCustomersRoute,
  allCatsRoute,
  accountRoute,
  contactRoute,
];

export const adminSignedInRoutes = [allUsersRoute, accountRoute];
export const customerSignedInRoutes = [
  signedInCustomersBookingsRoute,
  signedInCustomersDetailsRoute,
  signedInCustomersCatsRoute,
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  aboutRoute,
  contactRoute,
];
