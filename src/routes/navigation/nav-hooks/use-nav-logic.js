import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useIsRouteWithNavWarning from "../../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { confirmSureMessage, imSureMessage } from "../../../strings/confirms";
import { loseAllDataMessage } from "../../../strings/info";

const useNavLogic = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();

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

  return { handleNavigate, formattedLink };
};

export default useNavLogic;
