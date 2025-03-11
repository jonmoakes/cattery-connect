import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const IntellectualProperty = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Intellectual Property:</CustomBalancedText>
    <CustomBalancedText>
      All content, features, and intellectual property rights related to the app
      are owned by{" "}
      <a href="https://www.solaris-apps.co.uk" target="_blank" rel="noreferrer">
        solaris apps
      </a>
      . Unauthorised reproduction, distribution, or modification of any part of
      the app is strictly prohibited.
    </CustomBalancedText>
  </ParentDiv>
);

export default IntellectualProperty;
