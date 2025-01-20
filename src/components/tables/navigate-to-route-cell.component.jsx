import Balancer from "react-wrap-balancer";

import useSetDataToBePassedAndNavigate from "./table-hooks/use-set-data-to-be-passed-and-navigate";

import { MinimalButton } from "../../styles/button/button.styles";

import { viewCustomersCatsRoute } from "../../strings/routes";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const NavigateToRouteCell = ({ dataToBePassed, route }) => {
  const { setDataToBePassedAndNavigate } = useSetDataToBePassedAndNavigate();

  const { customerName } = dataToBePassed ?? "customer's";

  return (
    <MinimalButton
      type="button"
      onClick={() => setDataToBePassedAndNavigate(dataToBePassed, route)}
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
