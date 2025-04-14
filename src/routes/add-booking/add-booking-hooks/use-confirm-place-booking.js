import { useDispatch } from "react-redux";

import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { updatePensDataInDbAsync } from "../../../store/update-pens-data/update-pens-data.thunks";
import { uploadBookingDataToDbAsync } from "../../../store/upload-booking-data/upload-booking-data.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { imSureMessage } from "../../../strings/confirms";
import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
import useAddBookingVariables from "./use-add-booking-variables";

const useConfirmPlaceBooking = () => {
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { parsedAvailabilityData } = useGetIsBookingAvailableSelectors();
  const { catteryId } = useGetCurrentUserSelectors();
  const { managesOwnPens } = useGetCatteryDetailsSelectors();
  const { totalCost } = useAddBookingVariables();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmPlaceBooking = () => {
    const operation = "deduct";

    const confirmResult = () => {
      if (!managesOwnPens) {
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
                totalCost,
                catteryId,
              })
            );
          }
        });
      } else {
        dispatch(
          uploadBookingDataToDbAsync({
            uploadBookingData,
            totalCost,
            catteryId,
          })
        );
      }
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
