import useAllCatsTableVariables from "../all-cats/all-cats-hooks/use-all-cats-table-variables";
import useResetCustomerDetailsIfApplicableAndGoToAddCustomerRoute from "./all-customers-hooks/use-reset-customer-details-if-applicable-and-go-to-add-customer-route";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndAddCustomerLink = () => {
  const { atLeastOneCustomerExists } = useAllCatsTableVariables();
  const { resetCustomerDetailsIfApplicableAndGoToAddCustomerRoute } =
    useResetCustomerDetailsIfApplicableAndGoToAddCustomerRoute();

  return (
    <ParentDiv>
      <CustomBalancedText type="h1">your customers</CustomBalancedText>

      {atLeastOneCustomerExists ? (
        <MinimalButton
          className="margin-bottom"
          onClick={resetCustomerDetailsIfApplicableAndGoToAddCustomerRoute}
        >
          add another customer
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCustomerLink;
