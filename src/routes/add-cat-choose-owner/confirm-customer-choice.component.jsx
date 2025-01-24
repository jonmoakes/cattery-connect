import Balancer from "react-wrap-balancer";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { RedSpan } from "../../styles/span/span.styles";
import { Button } from "../../styles/button/button.styles";

import { addCatChooseOwnerRoute, addCatRoute } from "../../strings/routes";

const ConfirmCustomerChoice = ({ selectedCustomer }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {selectedCustomer ? (
        <>
          <p>you will be adding a cat for</p>

          <p>
            <RedSpan>{selectedCustomer.name}.</RedSpan>
          </p>
          <p>
            <Balancer>
              if this is correct, tap the button below to proceed, or choose
              another customer from the list.
            </Balancer>
          </p>

          <Button
            type="button"
            className="teal"
            onClick={() =>
              hamburgerHandlerNavigate(addCatRoute, {
                fromRoute: addCatChooseOwnerRoute,
              })
            }
          >
            continue
          </Button>
        </>
      ) : null}
    </>
  );
};

export default ConfirmCustomerChoice;
