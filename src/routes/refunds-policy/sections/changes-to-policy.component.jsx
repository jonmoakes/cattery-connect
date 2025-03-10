import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const ChangesToPolicy = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      Changes to the Refunds Policy:
    </CustomBalancedText>

    <CustomBalancedText>
      We may update this Refunds Policy occasionally.
    </CustomBalancedText>
    <CustomBalancedText>
      Please review this policy periodically for any changes.
    </CustomBalancedText>
    <CustomBalancedText>
      The date of the last update will be indicated at the top of the policy.
    </CustomBalancedText>
  </ParentDiv>
);

export default ChangesToPolicy;
