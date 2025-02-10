import { useDispatch } from "react-redux";

import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import {
  resetIsBookingAvailableError,
  resetIsBookingAvailableResult,
  setAddBookingData,
  setShowIneligibleDates,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useHandleCustomerSelectChange = () => {
  const {
    addBookingData,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
  } = useGetDbManageAddBookingSelectors();
  const { allCustomers } = useGetAllCustomerSelectors();

  const dispatch = useDispatch();

  const handleCustomerSelectChange = (e) => {
    const selectedCustomer = allCustomers.find(
      (customer) => customer.name === e.target.value
    );

    const parsedCustomerCatDetails = selectedCustomer.catDetails
      ? JSON.parse(selectedCustomer?.catDetails || [])
      : "";

    dispatch(
      setAddBookingData({
        ...addBookingData,
        customerDocumentId: selectedCustomer?.$id || "",
        customerId: selectedCustomer?.customerId || "",
        customerName: selectedCustomer?.name || "",
        catDetails: selectedCustomer?.catDetails ?? "",
        catsInBooking:
          parsedCustomerCatDetails && parsedCustomerCatDetails.length === 1
            ? [parsedCustomerCatDetails[0].catsName]
            : [],
        checkInDate: "",
        checkInSlot: "",
        checkOutDate: "",
        checkOutSlot: "",
      })
    );

    if (isBookingAvailableResult) {
      dispatch(resetIsBookingAvailableResult());
    }
    if (isBookingAvailableError) {
      dispatch(resetIsBookingAvailableError());
    }
    if (showIneligibleDates) {
      dispatch(setShowIneligibleDates(false));
    }
  };

  return { handleCustomerSelectChange };
};

export default useHandleCustomerSelectChange;
