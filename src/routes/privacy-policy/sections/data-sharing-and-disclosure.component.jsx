import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const DataSharingAndDisclosure = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      Data Sharing and Disclosure:
    </CustomBalancedText>

    <CustomBalancedText>third party sharing:</CustomBalancedText>

    <CustomBalancedText>
      We share information with third-party service providers necessary for
      operating our app, such as payment processors ( e.g.,{" "}
      <a className="teal" href="https://stripe.com/gb">
        Stripe
      </a>{" "}
      ) and data storage providers.
    </CustomBalancedText>

    <CustomBalancedText>
      We may disclose your information to comply with legal obligations or
      respond to lawful requests from public authorities.
    </CustomBalancedText>

    <CustomBalancedText>
      We do not share your, your customers, or your cats data with third parties
      for marketing purposes.
    </CustomBalancedText>
  </ParentDiv>
);

export default DataSharingAndDisclosure;
