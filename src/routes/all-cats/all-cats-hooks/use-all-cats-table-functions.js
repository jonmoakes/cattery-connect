import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import {
  setSelectedCatsName,
  setSelectedCatsOwnerCustomerId,
  resetGetAllCatsState,
} from "../../../store/get-all-cats/get-all-cats.slice";
import { fetchAllCatsAsync } from "../../../store/get-all-cats/get-all-cats.thunks";
import {
  setCatDetailForFormComparison,
  setCatDetails,
} from "../../../store/cat-details-management/cat-details-management.slice";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { allCatsRoute, editCatRoute } from "../../../strings/routes";

const useAllCatsTableFunctions = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const setDataForCatEditingAndGoToEditCatRoute = (chosenEntry) => {
    dispatch(setCatDetails(chosenEntry));
    dispatch(setCatDetailForFormComparison(chosenEntry));
    hamburgerHandlerNavigate(editCatRoute, { fromRoute: allCatsRoute });
  };

  // triggers useEffect fetch of cats owner details
  const setSelectedCatsOwnersCustomerIdAndCatsName = (
    selectedCatsOwnerCustomerId,
    catsName
  ) => {
    dispatch(setSelectedCatsOwnerCustomerId(selectedCatsOwnerCustomerId));
    dispatch(setSelectedCatsName(catsName));
  };

  const resetGetAllCatStateAndRefetchAllCats = () => {
    dispatch(resetGetAllCatsState());
    dispatch(fetchAllCatsAsync({ catteryId }));
  };

  return {
    setDataForCatEditingAndGoToEditCatRoute,
    setSelectedCatsOwnersCustomerIdAndCatsName,
    resetGetAllCatStateAndRefetchAllCats,
  };
};

export default useAllCatsTableFunctions;
