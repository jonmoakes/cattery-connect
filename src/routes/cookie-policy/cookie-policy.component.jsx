import CookiesTitleAndIntro from "./sections/cookies-title-and-intro.component";
import WhatAreCookiesAndLocalStorage from "./sections/what-are-cookies-and-local-storage.component";
import TypesOfCookiesWeUse from "./sections/types-of-cookies-we-use.component";
import ManagingCookies from "./sections/managing-cookies.component";
import LocalStorage from "./sections/local-storage.component";
import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const CookiePolicy = () => (
  <Container>
    <CookiesTitleAndIntro />
    <WhatAreCookiesAndLocalStorage />
    <TypesOfCookiesWeUse />
    <ManagingCookies />
    <LocalStorage />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default CookiePolicy;
