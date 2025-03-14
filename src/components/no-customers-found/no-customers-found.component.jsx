import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";

import { addCustomerRoute } from "../../strings/routes";

const NoCustomersFound = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <CustomBalancedText type="h2">no customers found.</CustomBalancedText>
      <CustomBalancedText>
        no customers have been created yet.
      </CustomBalancedText>

      <MinimalButton
        className="margin-bottom"
        onClick={() => hamburgerHandlerNavigate(addCustomerRoute)}
      >
        add a customer
      </MinimalButton>
    </ParentDiv>
  );
};

export default NoCustomersFound;
