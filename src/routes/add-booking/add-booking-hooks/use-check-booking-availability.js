import { useDispatch } from "react-redux";

import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { setShowIneligibleDates } from "../../../store/is-booking-available/is-booking-available.slice";
import { checkBookingAvailabilityAsync } from "../../../store/is-booking-available/is-booking-available.thunks";

const useCheckBookingAvailability = () => {
  const { showIneligibleDates } = useGetIsBookingAvailableSelectors();
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

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

  return { checkBookingAvailability };
};

export default useCheckBookingAvailability;
