import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useGetHamburgerMenuSelectors from "./selectors/use-get-hamburger-menu-selectors";
import { hideHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.slice";

import useResetStore from "./use-reset-store";

const useHamburgerHandlerNavigate = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();

  const { resetStore } = useResetStore();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hamburgerHandlerNavigate = (route) => {
    if (showHamburgerMenu) {
      dispatch(hideHamburgerMenu());
      navigate(route);
    } else if (!showHamburgerMenu) {
      navigate(route);
    }
    resetStore();
  };

  return { hamburgerHandlerNavigate };
};

export default useHamburgerHandlerNavigate;
