import Balancer from "react-wrap-balancer";

import useGetAddCustomerDetailsSelectors from "../../hooks/selectors/use-get-all-customers-selectors";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import { addCustomerRoute } from "../../strings/routes";

const NoCustomersFound = ({ data }) => {
  const { allCustomers } = useGetAddCustomerDetailsSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {!data.length ? (
        <ParentDiv>
          <h2>no customers found.</h2>
          <p>
            <Balancer>no customers have been created yet.</Balancer>
          </p>

          {!allCustomers.length ? (
            <MinimalButton
              className="margin-bottom"
              onClick={() => hamburgerHandlerNavigate(addCustomerRoute)}
            >
              add a customer
            </MinimalButton>
          ) : null}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCustomersFound;
