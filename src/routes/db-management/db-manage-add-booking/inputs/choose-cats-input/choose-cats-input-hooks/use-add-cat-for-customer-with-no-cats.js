import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { setDetailsRequiredForCatManagement } from "../../../../../../store/cat-details-management/cat-details-management.slice";

import useHamburgerHandlerNavigate from "../../../../../../hooks/use-hamburger-handler-navigate";

import { addCatRoute } from "../../../../../../strings/routes";

const useAddCatForCustomerWithNoCats = () => {
  const { customerDocumentId } = useGetDbManageAddBookingSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const addCatForCustomerWithNoCats = () => {
    dispatch(
      setDetailsRequiredForCatManagement({
        customerDocumentId,
      })
    );
    hamburgerHandlerNavigate(addCatRoute);
  };

  return { addCatForCustomerWithNoCats };
};

export default useAddCatForCustomerWithNoCats;
