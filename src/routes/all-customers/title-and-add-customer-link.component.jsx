import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";

import useResetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute from "./all-customers-hooks/use-reset-customer-to-edit-details-if-applicable-and-go-to-add-customer-route";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndAddCustomerLink = () => {
  const { allCustomers } = useGetAllCustomersSelectors();
  const { resetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute } =
    useResetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute();

  return (
    <ParentDiv>
      <h1>your customers</h1>

      {allCustomers && allCustomers.length ? (
        <MinimalButton
          className="margin-bottom"
          onClick={
            resetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute
          }
        >
          add another customer
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCustomerLink;
