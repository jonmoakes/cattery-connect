import { useDispatch } from "react-redux";
import { resetRequiredCatteryDataForBookingState } from "../store/required-cattery-data/required-cattery-data-for-booking.slice";
import { resetIsBookingAvailableState } from "../store/is-booking-available/is-booking-available.slice";
import { resetUpdatePensDataState } from "../store/update-pens-data/update-pens-data.slice";
import { resetUploadBookingDataState } from "../store/upload-booking-data/upload-booking-data.slice";
import { resetIndividualCustomersCatsState } from "../store/get-individual-customers-cats/get-individual-customers-cats.slice";

const useResetAddBookingState = () => {
  const dispatch = useDispatch();

  const resetAddBookingState = () => {
    dispatch(resetRequiredCatteryDataForBookingState());
    dispatch(resetIsBookingAvailableState());
    dispatch(resetUpdatePensDataState());
    dispatch(resetUploadBookingDataState());
    dispatch(resetIndividualCustomersCatsState());
  };

  return { resetAddBookingState };
};

export default useResetAddBookingState;
