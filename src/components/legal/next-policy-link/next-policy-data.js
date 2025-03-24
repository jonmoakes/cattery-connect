import {
  cookiesRoute,
  dataProtectionPolicyRoute,
  creditsRoute,
  privacyPolicyRoute,
  refundsPolicyRoute,
  securityPolicyRoute,
  termsRoute,
  paymentTermsRoute,
} from "../../../strings/routes";

export const nextPolicyData = {
  [termsRoute]: {
    nextRoute: privacyPolicyRoute,
    buttonText: "privacy policy",
  },
  [privacyPolicyRoute]: {
    nextRoute: cookiesRoute,
    buttonText: "cookies policy",
  },
  [cookiesRoute]: {
    nextRoute: securityPolicyRoute,
    buttonText: "security policy",
  },
  [securityPolicyRoute]: {
    nextRoute: paymentTermsRoute,
    buttonText: "payment terms",
  },
  [paymentTermsRoute]: {
    nextRoute: refundsPolicyRoute,
    buttonText: "refunds policy",
  },
  [refundsPolicyRoute]: {
    nextRoute: dataProtectionPolicyRoute,
    buttonText: "data protection",
  },
  [dataProtectionPolicyRoute]: {
    nextRoute: creditsRoute,
    buttonText: "credits",
  },
  [creditsRoute]: {
    nextRoute: termsRoute,
    buttonText: "view T & C's",
  },
};
