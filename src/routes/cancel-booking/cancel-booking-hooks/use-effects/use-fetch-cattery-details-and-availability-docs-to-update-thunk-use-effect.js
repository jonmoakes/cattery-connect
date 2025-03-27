import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetCatteryDetailsSelectors from "../../../../hooks/selectors/use-get-cattery-details-selectors";

import { fetchAvailabilityDocsToUpdateAsync } from "../../../../store/cancel-booking/cancel-booking.thunks";
import { getCatteryDetailsAsync } from "../../../../store/cattery-details/cattery-details-thunks";

const useFetchCatteryDetailsAvailabilityDocsToUpdateThunkUseEffect = () => {
  const { dataFromBooking, hasBookingToCancelData } =
    useGetCancelBookingSelectors();
  const { managesOwnPens, catteryDetailsResult, catteryDetailsError } =
    useGetCatteryDetailsSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasBookingToCancelData) return;

    if (catteryDetailsResult !== "fulfilled" && !catteryDetailsError) {
      dispatch(getCatteryDetailsAsync({ catteryId }));
      return;
    }

    if (managesOwnPens) return;

    dispatch(fetchAvailabilityDocsToUpdateAsync({ dataFromBooking }));
  }, [
    dataFromBooking,
    dispatch,
    catteryId,
    hasBookingToCancelData,
    managesOwnPens,
    catteryDetailsResult,
    catteryDetailsError,
  ]);
};

export default useFetchCatteryDetailsAvailabilityDocsToUpdateThunkUseEffect;
