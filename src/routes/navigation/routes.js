import {
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  accountRoute,
  allCustomersRoute,
  allCatsRoute,
  allUsersRoute,
  bookingsRoute,
  todaysScheduleRoute,
} from "../../strings/routes";

export const signedInRoutes = [
  todaysScheduleRoute,
  bookingsRoute,
  allCustomersRoute,
  allCatsRoute,
  accountRoute,
  contactRoute,
];

export const adminSignedInRoutes = [allUsersRoute, accountRoute];

export const signedOutRoutes = [
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
];
