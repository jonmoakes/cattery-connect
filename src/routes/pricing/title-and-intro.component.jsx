import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import PaymentTermsLink from "./faqs/payment-terms-link.component";

import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndIntro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h1">pricing</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText type="h2">
        Simple & Affordable Cattery Management
      </CustomBalancedText>
      <CustomBalancedText>
        Manage your bookings, cat / customer details, and payments with ease -
        designed just for catteries.
      </CustomBalancedText>
      <PaymentTermsLink />
    </ParentDiv>
  </>
);

export default TitleAndIntro;
