import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import { foundersRate, standardRate } from "../../../constants/ui-constants";

const SubscriptionPayments = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h2">Subscription Payments</CustomBalancedText>

      <CustomBalancedText>
        this refers to how the owner pays the administrator for the app.
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Free Trial:</CustomBalancedText>

      <CustomBalancedText>
        You get full access to the app for 30 days, no payment details required.
      </CustomBalancedText>

      <CustomBalancedText>
        if you Start your free trial before 30th April 2025 and then subscribe,
        you will receive founders rate ( see below ) - even if your trial runs
        into May.
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">
        Monthly Subscription ( founders rate ):
      </CustomBalancedText>

      <CustomBalancedText>
        After your free trial, your subscription will cost £{foundersRate} per
        month if you sign up before 30th April 2025.
      </CustomBalancedText>

      <CustomBalancedText>this is called the founders rate.</CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">
        Monthly Subscription ( standard rate ):
      </CustomBalancedText>

      <CustomBalancedText>
        if you sign up after 30th April 2025, the price is £{standardRate} per
        month.
      </CustomBalancedText>

      <CustomBalancedText>this is called the standard rate.</CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">
        Annual Subscription ( Optional ):
      </CustomBalancedText>

      <CustomBalancedText>
        You can choose to pay yearly and get a 10% discount.
      </CustomBalancedText>

      <CustomBalancedText>
        this applies to bother founders rate and the standard rate.
      </CustomBalancedText>
      <BlackHr />
      <CustomBalancedText>
        if you subscribe under the founders rate and then cancel and
        resubscribe, you will be charged the standard rate.
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Billing:</CustomBalancedText>

      <CustomBalancedText>
        Payments are processed securely via{" "}
        <a href="" target="_blank" rel="noreferrer">
          Stripe
        </a>
        .
      </CustomBalancedText>

      <CustomBalancedText>
        you will receive a secure stripe hosted link via email or text (
        whichever your prefer ).
      </CustomBalancedText>

      <CustomBalancedText>
        clicking this link will take you to the secure stripe hosted link where
        you can enter your card details.
      </CustomBalancedText>

      <CustomBalancedText>
        Once payment is successfully completed, your subscription starts
        immediately.
      </CustomBalancedText>

      <CustomBalancedText type="h3">Disclaimer:</CustomBalancedText>

      <CustomBalancedText>
        Stripe is a third-party payment processor.
      </CustomBalancedText>
      <CustomBalancedText>
        Whilst Stripe is a widely trusted service, the administrator (Solaris
        Apps) is not responsible for Stripe’s website, security, or any
        technical issues on their platform.
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Cancellation:</CustomBalancedText>

      <CustomBalancedText>
        You can cancel at any time. Your subscription will remain active until
        the end of your billing period, and you won’t be charged again.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default SubscriptionPayments;
