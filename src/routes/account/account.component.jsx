import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";
import useGetManagesOwnPensAndAllowsOnlinePaymentsValuesThunkUseEffect from "./account-hooks/use-get-manages-own-pens-and-allows-online-payments-values-thunk-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import AccountButtonLinks from "./account-button-links.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv, UnderTitleContainer } from "../../styles/div/div.styles";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const Account = () => {
  const { name } = useGetCurrentUserSelectors();
  useCheckForAndClearFormDetails();
  useGetManagesOwnPensAndAllowsOnlinePaymentsValuesThunkUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Account"
        description="Manage your Cattery Connect account, update your details, and access your cattery settings."
      />
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
