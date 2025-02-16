import { useDispatch } from "react-redux";
import { resetRequiredCatteryDataForBookingState } from "../store/required-cattery-data/required-cattery-data-for-booking.slice";
import { resetIsBookingAvailableState } from "../store/is-booking-available/is-booking-available.slice";
import { resetUpdatePensDataState } from "../store/update-pens-data/update-pens-data.slice";
import { resetUploadBookingDataState } from "../store/upload-booking-data/upload-booking-data.slice";

const useResetAddBookingState = () => {
  const dispatch = useDispatch();

  const resetAddBookingState = () => {
    dispatch(resetRequiredCatteryDataForBookingState());
    dispatch(resetIsBookingAvailableState());
    dispatch(resetUpdatePensDataState());
    dispatch(resetUploadBookingDataState());
  };

  return { resetAddBookingState };
};

export default useResetAddBookingState;
