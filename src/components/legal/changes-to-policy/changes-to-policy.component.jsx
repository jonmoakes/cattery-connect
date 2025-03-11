import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const ChangesToPolicy = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Changes to This Policy:</CustomBalancedText>

    <CustomBalancedText>
      We may update this Privacy Policy periodically. Any changes will be posted
      on this page with an updated effective date at the top of the page.
    </CustomBalancedText>
    <CustomBalancedText>
      If the changes are significant, we will provide a prominent notice or, if
      required, obtain your consent.
    </CustomBalancedText>
  </ParentDiv>
);

export default ChangesToPolicy;
