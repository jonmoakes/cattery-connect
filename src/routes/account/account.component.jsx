import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";
import useGetManagesOwnPensAndAllowsOnlinePaymentsValuesThunkUseEffect from "./account-hooks/use-get-manages-own-pens-and-allows-online-payments-values-thunk-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import AccountButtonLinks from "./account-button-links.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv, UnderTitleContainer } from "../../styles/div/div.styles";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";
import { BlackHr } from "../../styles/hr/hr.styles";

const Account = () => {
  const { name, role } = useGetCurrentUserSelectors();
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
        <BlackHr />
        <UnderTitleContainer className="account">
          <CustomBalancedText>
            welcome {getFirstNameFromString(name)}!
          </CustomBalancedText>
          <CustomBalancedText>
            choose from the options below.
          </CustomBalancedText>
          {role === "owner" ? (
            <CustomBalancedText>
              to manage your subscription, scroll down to the 'customer portal'
              button.
            </CustomBalancedText>
          ) : null}
        </UnderTitleContainer>
      </ParentDiv>

      <AccountButtonLinks />
    </Container>
  );
};

export default Account;
