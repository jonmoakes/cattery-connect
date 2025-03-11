import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const DownwardArrowIcon = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">downward arrow icon:</CustomBalancedText>
    <CustomBalancedText>
      Image by{" "}
      <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=157360">
        OpenClipart-Vectors
      </a>{" "}
      from{" "}
      <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=157360">
        Pixabay
      </a>
    </CustomBalancedText>
  </ParentDiv>
);

export default DownwardArrowIcon;
