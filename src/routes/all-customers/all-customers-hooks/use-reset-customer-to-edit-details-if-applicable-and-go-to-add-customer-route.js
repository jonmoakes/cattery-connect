import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetCustomerToEditDetails } from "../../../store/data-to-be-passed/data-to-be-passed.slice";

import { addCustomerRoute } from "../../../strings/routes";

const useResetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute = () => {
  const { customerToEditDetails } = useGetDataToBePassedSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const resetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute = () => {
    if (Object.keys(customerToEditDetails).length) {
      dispatch(resetCustomerToEditDetails());
      hamburgerHandlerNavigate(addCustomerRoute);
    } else {
      hamburgerHandlerNavigate(addCustomerRoute);
    }
  };

  return { resetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute };
};

export default useResetCustomerToEditDetailsIfApplicableAndGoToAddCustomerRoute;
