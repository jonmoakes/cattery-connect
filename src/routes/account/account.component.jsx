import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import AccountButtonLinks from "./account-button-links.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const Account = () => {
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">account</CustomBalancedText>
      </ParentDiv>

      <AccountButtonLinks />
    </Container>
  );
};

export default Account;
