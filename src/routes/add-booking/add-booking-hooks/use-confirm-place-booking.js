import { useDispatch } from "react-redux";

import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";

import { updatePensDataInDbAsync } from "../../../store/update-pens-data/update-pens-data.thunks";
import { uploadBookingDataToDbAsync } from "../../../store/upload-booking-data/upload-booking-data.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { imSureMessage } from "../../../strings/confirms";

const useConfirmPlaceBooking = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { parsedAvailabilityData } = useGetIsBookingAvailableSelectors();
  const { catteryId } = useGetCurrentUserSelectors();
  const { pricePerNight } = useGetRequiredCatteryDataForBookingSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

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
              pricePerNight,
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

  return {
    confirmPlaceBooking,
  };
};

export default useConfirmPlaceBooking;
