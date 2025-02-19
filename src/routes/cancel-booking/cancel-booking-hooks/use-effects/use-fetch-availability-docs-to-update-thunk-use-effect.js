import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useCancelBookingVariables from "../use-cancel-booking-variables";
import { getRequiredCatteryDataForBookingAsync } from "../../../../store/required-cattery-data/required-cattery-data-for-booking.thunks";
import { fetchAvailabilityDocsToUpdateAsync } from "../../../../store/cancel-booking/cancel-booking.thunks";

const useFetchAvailabilityDocsToUpdateThunkUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { hasDataPassedFromBookingsTable, dataFromBooking } =
    useCancelBookingVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasDataPassedFromBookingsTable) return;

    dispatch(getRequiredCatteryDataForBookingAsync({ catteryId })).then(
      (resultAction) => {
        if (
          getRequiredCatteryDataForBookingAsync.rejected.match(resultAction)
        ) {
          return;
        } else if (
          getRequiredCatteryDataForBookingAsync.fulfilled.match(resultAction)
        ) {
          dispatch(
            fetchAvailabilityDocsToUpdateAsync({
              dataFromBooking,
            })
          );
        }
      }
    );
  }, [dataFromBooking, dispatch, hasDataPassedFromBookingsTable, catteryId]);
};

export default useFetchAvailabilityDocsToUpdateThunkUseEffect;
