import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CustomerPayments = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Customer Payments</CustomBalancedText>

    <CustomBalancedText>
      This section explains how customers pay you ( the owner ) for bookings.
    </CustomBalancedText>

    <CustomBalancedText>
      ⚠️ Important: Accepting online payments is optional.
    </CustomBalancedText>
    <CustomBalancedText>
      If you choose not to enable this feature, you can disregard this section.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">How Payments Work</CustomBalancedText>
    <CustomBalancedText>
      As part of your account setup, I can assist you in creating a Stripe
      account ( if needed ).
    </CustomBalancedText>

    <CustomBalancedText>
      Payments go directly to your Stripe account, ensuring you stay in full
      control of your finances.
    </CustomBalancedText>

    <CustomBalancedText>
      No commission fees – I don’t take a cut from your bookings.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Refunds & Disputes:</CustomBalancedText>
    <CustomBalancedText>
      If a customer requests a refund or disputes a charge, it is your
      responsibility to handle it through Stripe.
    </CustomBalancedText>

    <CustomBalancedText>
      While I do not manage or mediate payment disputes between owners and
      customers, I can assist you if needed with navigating the refund process
      in Stripe, especially if you find it challenging.
    </CustomBalancedText>

    <BlackHr />
    <CustomBalancedText type="h3">
      stripe's Payment Processing Fees:
    </CustomBalancedText>
    <CustomBalancedText>
      Stripe may charge transaction fees for each payment processed.
    </CustomBalancedText>
    <CustomBalancedText>
      For the latest fee details, visit{" "}
      <a href="https://stripe.com/gb/pricing" target="_blank" rel="noreferrer">
        stripes pricing page
      </a>
      .
    </CustomBalancedText>
  </ParentDiv>
);

export default CustomerPayments;
