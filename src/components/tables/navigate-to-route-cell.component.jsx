import { allCatsRoute } from "../../strings/routes";
import { MinimalButton } from "../../styles/button/button.styles";

import usePassIdAndGoToRoute from "./table-hooks/use-pass-id-and-go-to-route";

const NavigateToRouteCell = ({ route, idToBePassed }) => {
  const { passIdAndGoToRoute } = usePassIdAndGoToRoute(route, idToBePassed);

  return (
    <MinimalButton type="button" onClick={passIdAndGoToRoute}>
      {route === allCatsRoute ? "view cats" : "add cat"}
    </MinimalButton>
  );
};

export default NavigateToRouteCell;
