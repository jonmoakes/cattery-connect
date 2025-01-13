import {
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  accountRoute,
} from "../../strings/routes";

export const signedInRoutes = [accountRoute, contactRoute];

export const signedOutRoutes = [
  signInRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
];
