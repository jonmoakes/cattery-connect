import { useDispatch } from "react-redux";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import { resetCustomerDetails } from "../../../store/customer-details-management/customer-details-management.slice";
import {
  resetCatDetails,
  setCatDetailForFormComparison,
  setCatDetails,
  setDetailsRequiredForCatManagement,
} from "../../../store/cat-details-management/cat-details-management.slice";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { editCatRoute } from "../../../strings/routes";

const useSetDetailsRequiredForCatManagementAndNavigate = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();
  const { catDetails } = useGetCatDetailsManagementSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const setDetailsRequiredForCatManagementAndNavigate = (
    detailsRequiredForCatManagement,
    fromRoute,
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
    hamburgerHandlerNavigate(route, { fromRoute: fromRoute });
  };

  const setDataForCatEditingAndGoToEditCatRoute = (chosenEntry, fromRoute) => {
    dispatch(setCatDetails(chosenEntry));
    dispatch(setCatDetailForFormComparison(chosenEntry));
    hamburgerHandlerNavigate(editCatRoute, { fromRoute: fromRoute });
  };

  return {
    setDetailsRequiredForCatManagementAndNavigate,
    setDataForCatEditingAndGoToEditCatRoute,
  };
};

export default useSetDetailsRequiredForCatManagementAndNavigate;
