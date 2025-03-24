import TitleAndIntro from "./title-and-intro.component";
import FreeTrialInfo from "./free-trial-info.component";
import Prices from "./prices.component";
import ContactLink from "./contact-link.component";
import TitleAndEndOfTrialInfo from "./faqs/title-and-end-of-trial-info.component";
import PaymentRequiredInfo from "./faqs/payment-required-info.component";
import FeaturesAvailableInfo from "./faqs/features-available-info.component";
import Cancelling from "./faqs/cancelling.component";
import WhosItFor from "./faqs/whos-it-for.component";
import GetStarted from "./faqs/get-started.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import PaymentTermsLink from "./faqs/payment-terms-link.component";

const Pricing = () => (
  <Container>
    <TitleAndIntro />
    <FreeTrialInfo />
    <Prices />
    <ContactLink text={"to get started please"} />

    <ParentDiv>
      <TitleAndEndOfTrialInfo />
      <PaymentRequiredInfo />
      <FeaturesAvailableInfo />
      <Cancelling />
      <WhosItFor />
      <GetStarted />
      <PaymentTermsLink />
      <ContactLink />
    </ParentDiv>
  </Container>
);

export default Pricing;
