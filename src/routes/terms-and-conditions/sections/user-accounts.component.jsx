import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const UserAccounts = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">User accounts:</CustomBalancedText>
    <CustomBalancedText>
      To use our app, you must create an account.
    </CustomBalancedText>
    <CustomBalancedText>
      You are responsible for maintaining the confidentiality of your account
      credentials and for all activities that occur under your account.
    </CustomBalancedText>
  </ParentDiv>
);

export default UserAccounts;
