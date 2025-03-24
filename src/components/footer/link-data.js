import {
  cookiesRoute,
  dataProtectionPolicyRoute,
  creditsRoute,
  privacyPolicyRoute,
  refundsPolicyRoute,
  securityPolicyRoute,
  termsRoute,
  paymentTermsRoute,
} from "../../strings/routes";

export const links = [
  { id: 1, text: "terms & condintions", route: termsRoute },
  { id: 2, text: "privacy policy", route: privacyPolicyRoute },
  { id: 3, text: "cookies policy", route: cookiesRoute },
  { id: 4, text: "security policy", route: securityPolicyRoute },
  { id: 5, text: "payment terms", route: paymentTermsRoute },
  { id: 5, text: "refunds policy", route: refundsPolicyRoute },
  { id: 6, text: "Data protection", route: dataProtectionPolicyRoute },
  { id: 7, text: "credits", route: creditsRoute },
];
