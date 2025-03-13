import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import { setDetailsRequiredForCatManagement } from "../../../../../store/cat-details-management/cat-details-management.slice";

import useHamburgerHandlerNavigate from "../../../../../hooks/use-hamburger-handler-navigate";

import { addCatRoute } from "../../../../../strings/routes";

const useAddCatForCustomerWithNoCats = () => {
  const { customerId, customerName } = useGetUploadBookingDataSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const addCatForCustomerWithNoCats = () => {
    dispatch(
      setDetailsRequiredForCatManagement({
        customerId,
        customerName,
      })
    );
    hamburgerHandlerNavigate(addCatRoute);
  };

  return { addCatForCustomerWithNoCats };
};

export default useAddCatForCustomerWithNoCats;
