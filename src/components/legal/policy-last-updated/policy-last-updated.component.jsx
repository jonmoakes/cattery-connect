import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../custom-span/custom-span.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const PolicyLastUpdated = ({ date }) => (
  <ParentDiv>
    <CustomBalancedText>the policy was last updated on:</CustomBalancedText>
    <CustomBalancedText>
      <CustomSpan className="red">{date}</CustomSpan>
    </CustomBalancedText>
  </ParentDiv>
);

export default PolicyLastUpdated;
