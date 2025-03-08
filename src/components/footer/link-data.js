import {
  cookiesRoute,
  dataProtectionPolicyRoute,
  imageCreditsRoute,
  refundsPolicyRoute,
  securityPolicyRoute,
  termsRoute,
} from "../../strings/routes";

export const links = [
  { id: 1, text: "terms & condintions", route: termsRoute },
  { id: 2, text: "cookies policy", route: cookiesRoute },
  { id: 3, text: "security policy", route: securityPolicyRoute },
  { id: 4, text: "refunds policy", route: refundsPolicyRoute },
  { id: 5, text: "Data protection", route: dataProtectionPolicyRoute },
  { id: 6, text: "image credits", route: imageCreditsRoute },
];
