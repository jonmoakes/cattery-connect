import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const TypesOfCookiesWeUse = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">types of cookies we use:</CustomBalancedText>

    <CustomBalancedText>
      We use the following types of cookies:
    </CustomBalancedText>

    <CustomBalancedText type="h3"> Essential Cookies:</CustomBalancedText>

    <CustomBalancedText>
      These cookies are necessary for the app to function properly. They enable
      core functionalities such as security, network management, and
      accessibility. You cannot opt-out of these cookies as they are essential
      for the app's operation.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">Functionality Cookies:</CustomBalancedText>

    <CustomBalancedText>
      These cookies remember your preferences and choices to provide a more
      personalised experience. For example, they can remember your login details
      and preferences, so you don't have to re-enter them each time you use the
      app.
    </CustomBalancedText>

    <BlackHr />

    <CustomBalancedText type="h3">third-party cookies:</CustomBalancedText>

    <CustomBalancedText>
      In addition to our own cookies, we use third-party cookies to help us
      improve our services and manage transactions.
    </CustomBalancedText>

    <CustomBalancedText>
      One such third-party service is Stripe, which we use for payment
      processing.
    </CustomBalancedText>

    <CustomBalancedText>
      Stripe uses cookies to facilitate the payment process, ensure security,
      and prevent fraud.
    </CustomBalancedText>

    <CustomBalancedText type="h3">Type of Data Collected:</CustomBalancedText>

    <CustomBalancedText>
      These cookies may collect information such as your IP address, device
      information, and transaction details.
    </CustomBalancedText>

    <CustomBalancedText type="h3"> Stripe's Privacy Policy:</CustomBalancedText>

    <CustomBalancedText>
      For more information on how Stripe uses cookies and handles your data,
      please refer to{" "}
      <a href="https://stripe.com/gb/privacy" target="_blank" rel="noreferrer">
        Stripe’s Privacy Policy
      </a>
      .
    </CustomBalancedText>
  </ParentDiv>
);

export default TypesOfCookiesWeUse;
