import {
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  accountRoute,
  allCustomersRoute,
  allCatsRoute,
} from "../../strings/routes";

export const signedInRoutes = [
  allCustomersRoute,
  allCatsRoute,
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
];
