import {
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  accountRoute,
  allCustomersRoute,
  allCatsRoute,
  allUsersRoute,
} from "../../strings/routes";

export const signedInRoutes = [
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
