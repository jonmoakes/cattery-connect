import { allCatsRoute } from "../../strings/routes";
import { MinimalButton } from "../../styles/button/button.styles";

import usePassCusIdandGoToAddCatRoute from "./table-hooks/use-pass-cus-id-and-go-to-add-cat-route";

const NavigateToRouteCell = ({ route, customerId }) => {
  const { passCusIdandGoToAddCatRoute } = usePassCusIdandGoToAddCatRoute(
    route,
    customerId
  );

  console.log(route);

  return (
    <MinimalButton type="button" onClick={passCusIdandGoToAddCatRoute}>
      {route === allCatsRoute ? "view cats" : "add cat"}
    </MinimalButton>
  );
};

export default NavigateToRouteCell;
