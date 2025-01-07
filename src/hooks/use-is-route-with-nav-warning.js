import { useLocation } from "react-router-dom";
import { signUpRoute } from "../strings/routes";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === signUpRoute ? true : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
