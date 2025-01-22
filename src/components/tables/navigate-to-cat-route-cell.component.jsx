import Balancer from "react-wrap-balancer";

import useSetDetailsRequiredForCatManagementAndNavigate from "./table-hooks/use-set-details-required-for-cat-management-and-navigate";

import { MinimalButton } from "../../styles/button/button.styles";

import { viewCustomersCatsRoute } from "../../strings/routes";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const NavigateToCatRouteCell = ({ detailsRequiredForCatManagement, route }) => {
  const { setDetailsRequiredForCatManagementAndNavigate } =
    useSetDetailsRequiredForCatManagementAndNavigate();

  const { customerName } = detailsRequiredForCatManagement ?? "customer's";

  return (
    <MinimalButton
      type="button"
      onClick={() =>
        setDetailsRequiredForCatManagementAndNavigate(
          detailsRequiredForCatManagement,
          route
        )
      }
    >
      <Balancer>
        {route === viewCustomersCatsRoute
          ? `${getFirstNameFromString(customerName)}'s cats`
          : "add cat"}
      </Balancer>
    </MinimalButton>
  );
};

export default NavigateToCatRouteCell;
