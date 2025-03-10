import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const LegalDefinitions = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Definitions:</CustomBalancedText>

    <CustomBalancedText>
      "App" refers to the cattery connect application / website.
    </CustomBalancedText>

    <CustomBalancedText>
      "Administrator" refers to the owner of cattery connect who runs and
      maintains the app ( solaris apps ).
    </CustomBalancedText>

    <CustomBalancedText>
      "Owner" refers to users of the app who are cattery owners who can create
      and cancel bookings, and otherwise manage their cattery via the app.
    </CustomBalancedText>

    <CustomBalancedText>
      "Customer" refers to users of the app who use the app to pay for their
      cats stay with the owner of the cattery where their cats are staying.
    </CustomBalancedText>

    <CustomBalancedText>
      "account" refers to the account created to access the app's services.
    </CustomBalancedText>
  </ParentDiv>
);

export default LegalDefinitions;
