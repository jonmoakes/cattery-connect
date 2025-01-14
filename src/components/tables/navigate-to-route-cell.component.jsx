import { MinimalButton } from "../../styles/button/button.styles";

import usePassCusIdandGoToAddCatRoute from "./table-hooks/use-pass-cus-id-and-go-to-add-cat-route";

const NavigateToRouteCell = ({ route, customerId }) => {
  const { passCusIdandGoToAddCatRoute } = usePassCusIdandGoToAddCatRoute(
    route,
    customerId
  );

  return (
    <MinimalButton type="button" onClick={passCusIdandGoToAddCatRoute}>
      add cat
    </MinimalButton>
  );
};

export default NavigateToRouteCell;
