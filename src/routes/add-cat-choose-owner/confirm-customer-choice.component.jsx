import Balancer from "react-wrap-balancer";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { BackgroundSpan } from "../../styles/span/span.styles";
import { SelectCustomerButton } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCatChooseOwnerRoute, addCatRoute } from "../../strings/routes";

const ConfirmCustomerChoice = ({ selectedCustomer }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {selectedCustomer ? (
        <>
          <p>you will be adding a cat for:</p>

          <BlackHr />
          <p>
            <BackgroundSpan>{selectedCustomer.name}</BackgroundSpan>
          </p>
          <BlackHr />
          <p>
            <Balancer>
              if this is correct, tap the button below to proceed, or choose
              another customer from the list.
            </Balancer>
          </p>

          <SelectCustomerButton
            type="button"
            onClick={() =>
              hamburgerHandlerNavigate(addCatRoute, {
                fromRoute: addCatChooseOwnerRoute,
              })
            }
          >
            continue
          </SelectCustomerButton>
        </>
      ) : null}
    </>
  );
};

export default ConfirmCustomerChoice;
