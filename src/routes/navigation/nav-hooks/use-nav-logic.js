import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useIsRouteWithNavWarning from "../../../hooks/is-route-with-nav-warning/use-is-route-with-nav-warning";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { confirmSureMessage, imSureMessage } from "../../../strings/confirms";
import { loseAllDataMessage } from "../../../strings/info";
import { useLocation } from "react-router-dom";
import { paymentResultRoute } from "../../../strings/routes";

const useNavLogic = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const location = useLocation();
  const path = location.pathname;

  const handleNavigate = (route) => {
    return !isRouteWithNavWarning()
      ? hamburgerHandlerNavigate(route)
      : confirmForwardToNewRoute(
          confirmSureMessage,
          loseAllDataMessage,
          imSureMessage,
          "stay here",
          route
        );
  };

  const formattedLink = (route) => {
    return route.replaceAll("-", " ").replace("/", " ");
  };

  const isRouteWithHeader = path !== paymentResultRoute;

  return { handleNavigate, formattedLink, isRouteWithHeader };
};

export default useNavLogic;
