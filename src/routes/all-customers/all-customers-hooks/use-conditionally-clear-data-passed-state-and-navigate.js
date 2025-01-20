import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetDataToBePassedState } from "../../../store/data-to-be-passed/data-to-be-passed.slice";

import { addCustomerRoute } from "../../../strings/routes";

const useConditionallyClearDataPassedStateAndNavigate = () => {
  const { dataToBePassed } = useGetDataToBePassedSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const conditionallyClearDataPassedStateAndNavigate = () => {
    if (!Object.keys(dataToBePassed).length) {
      hamburgerHandlerNavigate(addCustomerRoute);
    } else {
      dispatch(resetDataToBePassedState());
      hamburgerHandlerNavigate(addCustomerRoute);
    }
  };

  return { conditionallyClearDataPassedStateAndNavigate };
};

export default useConditionallyClearDataPassedStateAndNavigate;
