import { useLocation } from "react-router-dom";

import useFormValuesCheck from "./use-form-values-check";

import {
  addBookingRoute,
  addCatRoute,
  addCustomerRoute,
  cancelBookingRoute,
  editCatRoute,
  editCustomerRoute,
  signInRoute,
} from "../../strings/routes";

const useIsRouteWithNavWarning = () => {
  const { hasSignInValues } = useFormValuesCheck();
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return (
      path === (signInRoute && hasSignInValues) ||
      path === addCustomerRoute ||
      path === editCustomerRoute ||
      path === addCatRoute ||
      path === editCatRoute ||
      path === addBookingRoute ||
      path === cancelBookingRoute
    );
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
