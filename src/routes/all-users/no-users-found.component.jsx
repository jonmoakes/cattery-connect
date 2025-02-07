import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const NoUsersFound = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">no users found.</CustomBalancedText>
    <CustomBalancedText>no users have been created yet.</CustomBalancedText>
  </ParentDiv>
);

export default NoUsersFound;
