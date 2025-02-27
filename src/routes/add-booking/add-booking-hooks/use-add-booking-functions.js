import { useDispatch } from "react-redux";

import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { checkBookingAvailabilityAsync } from "../../../store/is-booking-available/is-booking-available.thunks";
import { updatePensDataInDbAsync } from "../../../store/update-pens-data/update-pens-data.thunks";
import { uploadBookingDataToDbAsync } from "../../../store/upload-booking-data/upload-booking-data.thunks";
import {
  resetIsBookingAvailableResult,
  setShowIneligibleDates,
} from "../../../store/is-booking-available/is-booking-available.slice";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useAddBookingVariables from "./use-add-booking-variables";

import { imSureMessage } from "../../../strings/confirms";

const useAddBookingFunctions = () => {
  const {
    customerDocumentId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    uploadBookingData,
  } = useGetUploadBookingDataSelectors();
  const { showIneligibleDates, parsedAvailabilityData } =
    useGetIsBookingAvailableSelectors();
  const { moreCatsInBookingThanCapacityInOnePen } = useAddBookingVariables();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const shouldShowFormSubmissionButtons =
    !moreCatsInBookingThanCapacityInOnePen &&
    customerDocumentId &&
    customerName &&
    catsInBooking &&
    checkInDate &&
    checkInSlot &&
    checkOutDate &&
    checkOutSlot &&
    true;

  const checkBookingAvailability = (event) => {
    event.preventDefault();
    if (showIneligibleDates) {
      dispatch(setShowIneligibleDates(false));
    }

    dispatch(
      checkBookingAvailabilityAsync({
        uploadBookingData,
        catteryId,
      })
    );
  };

  const confirmPlaceBooking = () => {
    const operation = "deduct";

    const confirmResult = () => {
      dispatch(
        updatePensDataInDbAsync({
          parsedAvailabilityData,
          uploadBookingData,
          operation,
        })
      ).then((resultAction) => {
        if (updatePensDataInDbAsync.fulfilled.match(resultAction)) {
          dispatch(
            uploadBookingDataToDbAsync({
              uploadBookingData,
              catteryId,
            })
          );
        }
      });
    };

    confirmSwal(
      "are you sure that you want to place this booking?",
      "",
      imSureMessage,
      "",
      confirmResult,
      null
    );
  };

  const handleChangeDetailsRequest = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(resetIsBookingAvailableResult());
  };

  return {
    shouldShowFormSubmissionButtons,
    checkBookingAvailability,
    confirmPlaceBooking,
    handleChangeDetailsRequest,
  };
};

export default useAddBookingFunctions;
