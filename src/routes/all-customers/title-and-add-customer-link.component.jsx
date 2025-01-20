import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useConditionallyClearDataPassedStateAndNavigate from "./all-customers-hooks/use-conditionally-clear-data-passed-state-and-navigate";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndAddCustomerLink = () => {
  const { allCustomers } = useGetAllCustomersSelectors();
  const { conditionallyClearDataPassedStateAndNavigate } =
    useConditionallyClearDataPassedStateAndNavigate();

  return (
    <ParentDiv>
      <h1>your customers</h1>

      {allCustomers && allCustomers.length ? (
        <MinimalButton
          className="margin-bottom"
          onClick={conditionallyClearDataPassedStateAndNavigate}
        >
          add another customer
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCustomerLink;
