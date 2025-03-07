import {
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  accountRoute,
  allCustomersRoute,
  allCatsRoute,
  penAvailabilityRoute,
  allUsersRoute,
  bookingsRoute,
  dailyScheduleRoute,
} from "../../strings/routes";

export const signedInRoutes = [
  dailyScheduleRoute,
  bookingsRoute,
  allCustomersRoute,
  allCatsRoute,
  penAvailabilityRoute,
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
