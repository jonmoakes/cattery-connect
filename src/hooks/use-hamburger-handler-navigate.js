import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useGetHamburgerMenuSelectors from "./selectors/use-get-hamburger-menu-selectors";
import { hideHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.slice";

const useHamburgerHandlerNavigate = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hamburgerHandlerNavigate = (route, state) => {
    if (showHamburgerMenu) {
      dispatch(hideHamburgerMenu());
    }

    //if we want to pass state in some instances we can.
    // if no state is passed, it is undefined and the state object wont exist.
    navigate(route, state ? { state } : undefined);
  };

  return { hamburgerHandlerNavigate };
};

export default useHamburgerHandlerNavigate;
