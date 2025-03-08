import {
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  accountRoute,
  allCustomersRoute,
  allCatsRoute,
  penDataRoute,
  allUsersRoute,
  bookingsRoute,
  dailyScheduleRoute,
} from "../../strings/routes";

export const signedInRoutes = [
  dailyScheduleRoute,
  bookingsRoute,
  allCustomersRoute,
  allCatsRoute,
  penDataRoute,
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
