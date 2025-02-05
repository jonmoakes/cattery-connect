import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { SelectCustomerButton } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCatChooseOwnerRoute, addCatRoute } from "../../strings/routes";

const ConfirmCustomerChoice = ({ selectedCustomer }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {selectedCustomer ? (
        <>
          <CustomBalancedText>you will be adding a cat for:</CustomBalancedText>

          <BlackHr />
          <CustomBalancedText>
            <CustomSpan type="background">{selectedCustomer.name}</CustomSpan>
          </CustomBalancedText>
          <BlackHr />
          <CustomBalancedText>
            if this is correct, tap the button below to proceed, or choose
            another customer from the list.
          </CustomBalancedText>

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
