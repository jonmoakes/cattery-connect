import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setDetailsRequiredForCatManagement } from "../../../../../../store/cat-details-management/cat-details-management.slice";

import useHamburgerHandlerNavigate from "../../../../../../hooks/use-hamburger-handler-navigate";

import { addCatRoute } from "../../../../../../strings/routes";

const useGoToAddCatRouteWithCustomerData = () => {
  const { customerName, customerDocumentId } =
    useGetDbManageAddBookingSelectors();

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
