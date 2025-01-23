import { useDispatch } from "react-redux";

import {
  setCatDetailForFormComparison,
  setCatDetails,
  setDetailsRequiredForCatManagement,
} from "../../../store/cat-details-management/cat-details-management.slice";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  addCatRoute,
  editCatRoute,
  viewCustomersCatsRoute,
} from "../../../strings/routes";
import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

const useViewCustomersCatsFunctions = (chosenEntry) => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();
  const { customerDocumentId } = detailsRequiredForCatManagement ?? {};
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const goToAddCatRoutePassingNoExtraData = () => {
    hamburgerHandlerNavigate(addCatRoute);
  };

  const setCatDetailsForEditingAndGoToEditCatRoute = () => {
    dispatch(setCatDetails(chosenEntry));
    dispatch(setCatDetailForFormComparison(chosenEntry));
    dispatch(setDetailsRequiredForCatManagement({ customerDocumentId }));
    hamburgerHandlerNavigate(editCatRoute, {
      fromRoute: viewCustomersCatsRoute,
    });
  };

  return {
    goToAddCatRoutePassingNoExtraData,
    setCatDetailsForEditingAndGoToEditCatRoute,
  };
};

export default useViewCustomersCatsFunctions;
