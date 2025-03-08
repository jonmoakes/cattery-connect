import { useLocation } from "react-router-dom";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { imSureMessage } from "../../../strings/confirms";
import { loseAllDataMessage } from "../../../strings/info";
import {
  aboutRoute,
  accountRoute,
  contactRoute,
  signInRoute,
} from "../../../strings/routes";

const useFooterHooks = () => {
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const location = useLocation();

  const path = location.pathname;

  const confirmChange = (route) => {
    if (path === contactRoute) {
      confirmForwardToNewRoute(
        "are you sure?",
        loseAllDataMessage,
        imSureMessage,
        "",
        route
      );
    } else {
      hamburgerHandlerNavigate(route);
    }
  };

  const shouldShowFooter =
    path === "/" ||
    path === aboutRoute ||
    path === signInRoute ||
    path === contactRoute ||
    path === accountRoute;

  return { confirmChange, shouldShowFooter };
};

export default useFooterHooks;
