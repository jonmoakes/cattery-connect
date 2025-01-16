import Balancer from "react-wrap-balancer";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { MinimalButton } from "../../styles/button/button.styles";

import { viewCustomersCatsRoute } from "../../strings/routes";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const NavigateToRouteCell = ({ route, dataToBePassed }) => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { customerName } = dataToBePassed ?? {};

  return (
    <MinimalButton
      type="button"
      onClick={() => hamburgerHandlerNavigate(route, dataToBePassed)}
    >
      <Balancer>
        {route === viewCustomersCatsRoute
          ? `view ${getFirstNameFromString(customerName)}'s cats`
          : "add cat"}
      </Balancer>
    </MinimalButton>
  );
};

export default NavigateToRouteCell;
