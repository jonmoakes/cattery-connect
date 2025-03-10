import {
  cookiesRoute,
  dataProtectionPolicyRoute,
  privacyPolicyRoute,
  refundsPolicyRoute,
  securityPolicyRoute,
  termsRoute,
} from "../../strings/routes";

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
    nextRoute: refundsPolicyRoute,
    buttonText: "refunds policy",
  },
  [refundsPolicyRoute]: {
    nextRoute: dataProtectionPolicyRoute,
    buttonText: "data protection",
  },
};
