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
  } = useGetUploadBookingDataSelectors();
  let { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { showIneligibleDates, parsedAvailabilityData } =
    useGetIsBookingAvailableSelectors();
  const { moreCatsInBookingThanCapacityInOnePen, individualCustomersCats } =
    useAddBookingVariables();
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

  const getUpdatedBookingData = () => {
    if (uploadBookingData.catsInBooking.length === 0) {
      return {
        ...uploadBookingData,
        catsInBooking: [individualCustomersCats[0].catsName], // Needs to be an array for the thunk - it is a string by default here.
      };
    }
    return uploadBookingData;
  };

  const checkBookingAvailability = (event) => {
    event.preventDefault();
    if (showIneligibleDates) {
      dispatch(setShowIneligibleDates(false));
    }

    const updatedBookingData = getUpdatedBookingData();

    dispatch(
      checkBookingAvailabilityAsync({
        uploadBookingData: updatedBookingData,
        catteryId,
      })
    );
  };

  const confirmPlaceBooking = () => {
    const operation = "deduct";
    const updatedBookingData = getUpdatedBookingData();

    confirmSwal(
      "are you sure that you want to place this booking?",
      "",
      imSureMessage,
      "",
      () =>
        dispatch(
          updatePensDataInDbAsync({
            parsedAvailabilityData,
            uploadBookingData: updatedBookingData,
            operation,
          })
        ).then((resultAction) => {
          if (updatePensDataInDbAsync.fulfilled.match(resultAction)) {
            dispatch(
              uploadBookingDataToDbAsync({
                uploadBookingData: updatedBookingData,
                catteryId,
              })
            );
          }
        }),
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
