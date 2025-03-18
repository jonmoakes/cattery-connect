import useGetSignedInCustomersDetailsSelectors from "../../hooks/selectors/use-get-signed-in-customers-details-selectors";
import useGetSignedInCustomersDetailsThunkUseEffect from "./hooks/use-get-signed-in-customers-details-thunk-use-effect";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import CustomerDetailsMap from "./customer-details-map.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { signedInCustomerDetailsAccordionData } from "./signed-in-customer-details-accordion-data";

const SignedInCustomersDetails = () => {
  const { signedInCustomersDetailsIsLoading, signedInCustomersDetailsError } =
    useGetSignedInCustomersDetailsSelectors();
  useGetSignedInCustomersDetailsThunkUseEffect();

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">your Details</CustomBalancedText>
        <HelpAccordion
          className="neg-margin-top"
          openText="important info"
          data={signedInCustomerDetailsAccordionData}
        />
      </ParentDiv>

      {signedInCustomersDetailsIsLoading ? (
        <SkeletonBox loadingText="fetching details..." />
      ) : signedInCustomersDetailsError ? (
        <ShowFetchErrors />
      ) : (
        <CustomerDetailsMap />
      )}
    </Container>
  );
};

export default SignedInCustomersDetails;
