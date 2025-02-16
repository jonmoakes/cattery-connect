import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import { setDetailsRequiredForCatManagement } from "../../../../../../store/cat-details-management/cat-details-management.slice";

import useHamburgerHandlerNavigate from "../../../../../../hooks/use-hamburger-handler-navigate";

import { addCatRoute } from "../../../../../../strings/routes";

const useGoToAddCatRouteWithCustomerData = () => {
  const { customerName, customerDocumentId } =
    useGetUploadBookingDataSelectors();

  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const goToAddCatRouteWithCustomerData = () => {
    dispatch(
      setDetailsRequiredForCatManagement({
        customerDocumentId,
        customerName,
      })
    );
    hamburgerHandlerNavigate(addCatRoute);
  };

  return { goToAddCatRouteWithCustomerData };
};

export default useGoToAddCatRouteWithCustomerData;
