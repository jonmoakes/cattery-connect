import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";

import { addCustomerRoute } from "../../../strings/routes";

const useResetCustomerDetailsIfApplicableAndGoToAddCustomerRoute = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const resetCustomerDetailsIfApplicableAndGoToAddCustomerRoute = () => {
    if (Object.keys(customerDetails).length) {
      dispatch(resetCustomerDetails());
      hamburgerHandlerNavigate(addCustomerRoute);
    } else {
      hamburgerHandlerNavigate(addCustomerRoute);
    }
  };

  return { resetCustomerDetailsIfApplicableAndGoToAddCustomerRoute };
};

export default useResetCustomerDetailsIfApplicableAndGoToAddCustomerRoute;
