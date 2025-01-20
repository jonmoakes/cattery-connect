import { useDispatch } from "react-redux";

import { setDataToBePassed } from "../../../store/data-to-be-passed/data-to-be-passed.slice";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

const useSetDataToBePassedAndNavigate = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const setDataToBePassedAndNavigate = (dataToBePassed, route) => {
    dispatch(setDataToBePassed(dataToBePassed));
    hamburgerHandlerNavigate(route);
  };

  return { setDataToBePassedAndNavigate };
};

export default useSetDataToBePassedAndNavigate;
