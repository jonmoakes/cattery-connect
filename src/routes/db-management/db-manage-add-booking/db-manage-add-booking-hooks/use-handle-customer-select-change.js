import { useDispatch } from "react-redux";

import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";
import useGetIsBookingAvailableSelectors from "../../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import { setUploadBookingData } from "../../../../store/upload-booking-data/upload-booking-data.slice";
import {
  resetIsBookingAvailableError,
  resetIsBookingAvailableResult,
  setShowIneligibleDates,
} from "../../../../store/is-booking-available/is-booking-available.slice";
import { generateBookingId } from "../../../../functions/generate-short-id";

const useHandleCustomerSelectChange = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const {
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
  } = useGetIsBookingAvailableSelectors();
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
      setUploadBookingData({
        ...uploadBookingData,
        bookingId: generateBookingId(),
        customerDocumentId: selectedCustomer?.$id || "",
        customerId: selectedCustomer?.customerId || "",
        customerName: selectedCustomer?.name || "",
        customerEmail: selectedCustomer?.email || "",
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
