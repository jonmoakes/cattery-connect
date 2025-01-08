import { useLocation } from "react-router-dom";

import useFormValuesCheck from "./use-form-values-check";

import { signInRoute, signUpRoute } from "../../strings/routes";

const useIsRouteWithNavWarning = () => {
  const { hasSignInValues, hasSignUpValues } = useFormValuesCheck();
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return (
      (path === signUpRoute && hasSignUpValues) ||
      (path === signInRoute && hasSignInValues)
    );
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
