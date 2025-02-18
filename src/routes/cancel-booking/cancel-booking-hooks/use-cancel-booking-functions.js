import { useDispatch } from "react-redux";

import { updatePensDataInDbAsync } from "../../../store/update-pens-data/update-pens-data.thunks";
import { deleteBookingDataAsync } from "../../../store/cancel-booking/cancel-booking.thunks";

import useCancelBookingVariables from "./use-cancel-booking-variables";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { imSureMessage } from "../../../strings/confirms";

// matching the data format to be the same as when adding a booking
// regarding catsInBooking which was a string and needs to be an array,
// and availabilityDocsToUpdate needs to be named parsedAvailabilityData in the thunk

const useCancelBookingFunctions = () => {
  const { dataFromBooking, availabilityDocsToUpdate, $id } =
    useCancelBookingVariables();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmCancelBooking = () => {
    const uploadBookingData = {
      ...dataFromBooking,
      catsInBooking: dataFromBooking.catsInBooking
        .split(",")
        .map((cat) => cat.trim()),
    };
    const operation = "add";

    confirmSwal(
      "are you sure you want to cancel this booking?",
      "",
      imSureMessage,
      "don't cancel",
      () =>
        dispatch(
          updatePensDataInDbAsync({
            parsedAvailabilityData: availabilityDocsToUpdate,
            uploadBookingData,
            operation,
          })
        ).then((resultAction) => {
          if (updatePensDataInDbAsync.rejected.match(resultAction)) {
            return;
          } else {
            dispatch(deleteBookingDataAsync({ $id }));
          }
        }),
      null
    );
  };

  return { confirmCancelBooking };
};

export default useCancelBookingFunctions;
