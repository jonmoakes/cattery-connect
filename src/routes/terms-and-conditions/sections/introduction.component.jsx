import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const Introduction = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">introduction</CustomBalancedText>
    <CustomBalancedText>
      Welcome to cattery connect, an app developed by{" "}
      <a href="https://www.solaris-apps.co.uk" target="_blank" rel="noreferrer">
        solaris apps
      </a>{" "}
      for managing your cattery.
    </CustomBalancedText>
    <CustomBalancedText>
      By using our app, you agree to these terms and conditions. We may update
      these terms from time to time, and you will be notified of any changes.
    </CustomBalancedText>
  </ParentDiv>
);

export default Introduction;
