import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";

import { getRequiredCatteryDataForBookingAsync } from "../../../../store/required-cattery-data/required-cattery-data-for-booking.thunks";
import { fetchAvailabilityDocsToUpdateAsync } from "../../../../store/cancel-booking/cancel-booking.thunks";

const useFetchAvailabilityDocsToUpdateThunkUseEffect = () => {
  const { dataFromBooking, hasBookingToCancelData } =
    useGetCancelBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasBookingToCancelData) return;

    dispatch(getRequiredCatteryDataForBookingAsync({ catteryId })).then(
      (resultAction) => {
        if (
          getRequiredCatteryDataForBookingAsync.fulfilled.match(resultAction)
        ) {
          dispatch(fetchAvailabilityDocsToUpdateAsync({ dataFromBooking }));
        }
      }
    );
  }, [dataFromBooking, dispatch, catteryId, hasBookingToCancelData]);
};

export default useFetchAvailabilityDocsToUpdateThunkUseEffect;
