import { useDispatch } from "react-redux";

import { resetIsBookingAvailableState } from "../store/is-booking-available/is-booking-available.slice";
import { resetUpdatePensDataState } from "../store/update-pens-data/update-pens-data.slice";
import { resetUploadBookingDataState } from "../store/upload-booking-data/upload-booking-data.slice";
import { resetIndividualCustomersCatsState } from "../store/get-individual-customers-cats/get-individual-customers-cats.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";
import { resetCatteryDetailsState } from "../store/cattery-details/cattery-details-slice";

const useResetAddBookingState = () => {
  const dispatch = useDispatch();

  const resetAddBookingState = () => {
    dispatch(resetCatteryDetailsState());
    dispatch(resetIsBookingAvailableState());
    dispatch(resetUpdatePensDataState());
    dispatch(resetUploadBookingDataState());
    dispatch(resetIndividualCustomersCatsState());
    dispatch(resetSendEmailState());
  };

  return { resetAddBookingState };
};

export default useResetAddBookingState;
