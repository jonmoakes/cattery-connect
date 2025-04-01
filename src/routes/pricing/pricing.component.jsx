import Metadata from "../../components/metadata/metadata.component";
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
import PaymentTermsLink from "./faqs/payment-terms-link.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const Pricing = () => (
  <Container>
    <Metadata
      title="Cattery Connect - Pricing"
      description="Discover Cattery Connect pricing: affordable plans for cattery owners with a 30-day free trial. Manage bookings, customers, and payments effortlessly."
      ogTitle="Cattery Connect Pricing"
      ogDescription="Get started with Cattery Connect - Enjoy a 30-day free trial with full access to booking management and online payments."
    />
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
