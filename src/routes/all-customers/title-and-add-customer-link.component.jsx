import useAllCatsTableVariables from "../all-cats/all-cats-hooks/use-all-cats-table-variables";
import useResetCustomerDetailsIfApplicableAndGoToAddCustomerRoute from "./all-customers-hooks/use-reset-customer-details-if-applicable-and-go-to-add-customer-route";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndAddCustomerLink = () => {
  const { atLeastOneCustomerExists } = useAllCatsTableVariables();
  const { resetCustomerDetailsIfApplicableAndGoToAddCustomerRoute } =
    useResetCustomerDetailsIfApplicableAndGoToAddCustomerRoute();

  return (
    <ParentDiv>
      <h1>your customers</h1>

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
