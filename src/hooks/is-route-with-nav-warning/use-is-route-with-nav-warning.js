import { useLocation } from "react-router-dom";

import useFormValuesCheck from "./use-form-values-check";

import { signInRoute } from "../../strings/routes";

const useIsRouteWithNavWarning = () => {
  const { hasSignInValues } = useFormValuesCheck();
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === signInRoute && hasSignInValues;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
