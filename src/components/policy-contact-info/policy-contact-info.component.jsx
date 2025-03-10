import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";

import { ParentDiv } from "../../styles/div/div.styles";

const PolicyContactInfo = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">contact information</CustomBalancedText>

    <CustomBalancedText>
      For support or questions about these terms, contact us at:
    </CustomBalancedText>

    <CustomBalancedText>
      <CustomSpan type="lowercase">admin@cattery-connect.co.uk</CustomSpan>{" "}
      <br />( Support & General Inquiries )
    </CustomBalancedText>

    <CustomBalancedText>or</CustomBalancedText>
    <CustomBalancedText>
      <CustomSpan type="lowercase">jonathan@solaris-apps.co.uk</CustomSpan>
      <br />( Business & Partnership Inquiries )
    </CustomBalancedText>
  </ParentDiv>
);

export default PolicyContactInfo;
