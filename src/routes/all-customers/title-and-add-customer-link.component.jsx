import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { addCustomerRoute } from "../../strings/routes";

const TitleAndAddCustomerLink = () => {
  const { allCustomers } = useGetAllCustomersSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <h1>your customers</h1>

      {allCustomers && allCustomers.length ? (
        <MinimalButton
          className="margin-bottom"
          onClick={() => hamburgerHandlerNavigate(addCustomerRoute)}
        >
          add another customer
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCustomerLink;
