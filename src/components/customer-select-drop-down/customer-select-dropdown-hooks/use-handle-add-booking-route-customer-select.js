import { useDispatch } from "react-redux";

import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";

import { fetchIndividualCustomersCatsAsync } from "../../../store/get-individual-customers-cats/get-individual-customers-cats.thunks";
import { setUploadBookingData } from "../../../store/upload-booking-data/upload-booking-data.slice";
import {
  resetIsBookingAvailableError,
  resetIsBookingAvailableResult,
  setShowIneligibleDates,
} from "../../../store/is-booking-available/is-booking-available.slice";

import { generateBookingId } from "../../../functions/generate-short-id";

const useHandleAddBookingRouteCustomerSelect = () => {
  const { allCustomers } = useGetAllCustomerSelectors();
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const {
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
  } = useGetIsBookingAvailableSelectors();

  const dispatch = useDispatch();

  const handleAddBookingRouteCustomerSelect = (customer) => {
    const selectedCustomer = allCustomers.find(
      (cust) => cust.name === customer.name
    );

    const customerId = selectedCustomer.customerId;

    dispatch(fetchIndividualCustomersCatsAsync({ customerId })).then(
      (resultAction) => {
        if (fetchIndividualCustomersCatsAsync.fulfilled.match(resultAction)) {
          dispatch(
            setUploadBookingData({
              ...uploadBookingData,
              bookingId: generateBookingId(),
              customerDocumentId: selectedCustomer?.$id || "",
              customerId: selectedCustomer?.customerId || "",
              customerName: selectedCustomer?.name || "",
              customerEmail: selectedCustomer?.email || "",
              catsInBooking: undefined,
              checkInDate: "",
              checkInSlot: "",
              checkOutDate: "",
              checkOutSlot: "",
              paymentStatus: "",
            })
          );
        }
      }
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

  return { handleAddBookingRouteCustomerSelect };
};

export default useHandleAddBookingRouteCustomerSelect;
