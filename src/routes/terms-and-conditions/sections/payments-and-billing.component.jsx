import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const PaymentsAndBilling = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Payments And billing:</CustomBalancedText>
    <CustomBalancedText>
      payments can be made in-app using our payment processor,{" "}
      <a className="teal" href="https://stripe.com/gb">
        Stripe
      </a>
      .
    </CustomBalancedText>

    <CustomBalancedText>
      Customers may have the option to pay for their booking through the app if
      payment was not made in person at the time of booking.
    </CustomBalancedText>

    <CustomBalancedText>
      When an owner adds a booking, if payment is not collected immediately, the
      booking's payment status will be marked as "incomplete" until the customer
      completes payment.
    </CustomBalancedText>

    <CustomBalancedText>
      The agreement regarding payment terms, deadlines, and any disputes is
      strictly between the owner and the customer. The app serves only as a
      platform for processing payments and does not mediate payment disputes.
    </CustomBalancedText>

    <CustomBalancedText>
      Any refunds or cancellations related to payments must be handled directly
      between the owner and the customer. The app does not process refunds
      unless explicitly initiated by the owner through Stripe.
    </CustomBalancedText>

    <CustomBalancedText type="h3">for owners:</CustomBalancedText>

    <CustomBalancedText>
      Transaction fees apply for each payment a customer makes through Stripe.
    </CustomBalancedText>

    <CustomBalancedText>
      please see{" "}
      <a className="teal" href="https://stripe.com/gb/pricing">
        Here
      </a>{" "}
      for stripe transaction fees.
    </CustomBalancedText>

    <CustomBalancedText>
      Payment for the app's services is made in accordance with the contract
      signed before purchasing the app.
    </CustomBalancedText>
  </ParentDiv>
);

export default PaymentsAndBilling;
