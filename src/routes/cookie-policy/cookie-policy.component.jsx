import Metadata from "../../components/metadata/metadata.component";
import CookiesTitleAndIntro from "./sections/cookies-title-and-intro.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import WhatAreCookiesAndLocalStorage from "./sections/what-are-cookies-and-local-storage.component";
import TypesOfCookiesWeUse from "./sections/types-of-cookies-we-use.component";
import ManagingCookies from "./sections/managing-cookies.component";
import LocalStorage from "./sections/local-storage.component";
import ChangesToPolicy from "../../components/legal/changes-to-policy/changes-to-policy.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const CookiePolicy = () => (
  <Container>
    <Metadata
      title="Cattery Connect - Cookies Policy"
      description="Find out how Cattery Connect uses cookies to enhance your experience and improve our services."
      ogTitle="Cattery Connect - Cookies Policy"
      ogDescription="Learn about the cookies we use at Cattery Connect and how they help improve your browsing experience."
    />
    <CookiesTitleAndIntro />
    <PolicyLastUpdated date="1st April 2025" />
    <WhatAreCookiesAndLocalStorage />
    <TypesOfCookiesWeUse />
    <ManagingCookies />
    <LocalStorage />
    <ChangesToPolicy />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default CookiePolicy;
