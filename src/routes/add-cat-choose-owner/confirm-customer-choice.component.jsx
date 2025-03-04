import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { SelectCustomerButton } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCatChooseOwnerRoute, addCatRoute } from "../../strings/routes";

const ConfirmCustomerChoice = ({ selectedCustomerName }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <CustomBalancedText>you will be adding a cat for:</CustomBalancedText>

      <BlackHr />
      <CustomBalancedText>
        <CustomSpan type="background">{selectedCustomerName}</CustomSpan>
      </CustomBalancedText>
      <BlackHr />
      <CustomBalancedText>
        if this is correct, tap the button below to proceed, or choose another
        customer from the list ( you will have to modify or delete the current
        search term that you have entered in order to choose another customer ).
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
  );
};

export default ConfirmCustomerChoice;
