import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import AccountButtonLinks from "./account-button-links.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv, UnderTitleContainer } from "../../styles/div/div.styles";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const Account = () => {
  const { name } = useGetCurrentUserSelectors();
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">account</CustomBalancedText>
        <UnderTitleContainer className="account">
          <CustomBalancedText>
            welcome {getFirstNameFromString(name)}!<br />
            choose from the options below.
          </CustomBalancedText>
        </UnderTitleContainer>
      </ParentDiv>

      <AccountButtonLinks />
    </Container>
  );
};

export default Account;
