import { useDispatch } from "react-redux";

import useGetCancelBookingSelectors from "../../../hooks/selectors/use-get-cancel-booking-selectors";

import { updatePensDataInDbAsync } from "../../../store/update-pens-data/update-pens-data.thunks";
import { deleteBookingDataAsync } from "../../../store/cancel-booking/cancel-booking.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { imSureMessage } from "../../../strings/confirms";

// matching the data format to be the same as when adding a booking
// regarding catsInBooking which was a string and needs to be an array,
// and availabilityDocsToUpdate needs to be named parsedAvailabilityData in the thunk

const useConfirmCancelBooking = () => {
  const { dataFromBooking, availabilityDocsToUpdate, $id } =
    useGetCancelBookingSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmCancelBooking = (e) => {
    e.preventDefault();

    const uploadBookingData = {
      ...dataFromBooking,
      catsInBooking: dataFromBooking?.catsInBooking
        ? dataFromBooking.catsInBooking.split(",").map((cat) => cat.trim())
        : [],
    };

    const confirmResult = () => {
      const operation = "add";
      dispatch(
        updatePensDataInDbAsync({
          parsedAvailabilityData: availabilityDocsToUpdate,
          uploadBookingData,
          operation,
        })
      ).then((resultAction) => {
        if (updatePensDataInDbAsync.fulfilled.match(resultAction)) {
          dispatch(deleteBookingDataAsync({ $id }));
        }
      });
    };

    confirmSwal(
      "are you sure you want to cancel this booking?",
      "",
      imSureMessage,
      "don't cancel",
      confirmResult,
      null
    );
  };

  return { confirmCancelBooking };
};

export default useConfirmCancelBooking;
