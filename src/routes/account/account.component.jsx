import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";

import AccountButtonLinks from "./account-button-links.component";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const Account = () => {
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <h1>account</h1>
      </ParentDiv>

      <AccountButtonLinks />
    </Container>
  );
};

export default Account;
