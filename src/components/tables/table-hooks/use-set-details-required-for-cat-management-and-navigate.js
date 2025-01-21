import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import {
  resetCatDetails,
  setDetailsRequiredForCatManagement,
} from "../../../store/cat-details-management/cat-details-management.slice";
import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import { resetCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";
import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

const useSetDetailsRequiredForCatManagementAndNavigate = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();
  const { catDetails } = useGetCatDetailsManagementSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const setDetailsRequiredForCatManagementAndNavigate = (
    detailsRequiredForCatManagement,
    route
  ) => {
    const ObjectHasDetails = (obj) => {
      return Object.values(obj).some((value) => value !== "");
    };

    if (ObjectHasDetails(customerDetails)) {
      dispatch(resetCustomerDetails());
    } else if (ObjectHasDetails(catDetails)) {
      dispatch(resetCatDetails());
    }

    dispatch(
      setDetailsRequiredForCatManagement(detailsRequiredForCatManagement)
    );
    hamburgerHandlerNavigate(route);
  };

  return { setDetailsRequiredForCatManagementAndNavigate };
};

export default useSetDetailsRequiredForCatManagementAndNavigate;
