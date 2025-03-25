import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";

import { getRequiredCatteryDataForBookingAsync } from "../../../../store/required-cattery-data/required-cattery-data-for-booking.thunks";
import { fetchAvailabilityDocsToUpdateAsync } from "../../../../store/cancel-booking/cancel-booking.thunks";

const useFetchCatteryDetailsAvailabilityDocsToUpdateThunkUseEffect = () => {
  const { dataFromBooking, hasBookingToCancelData } =
    useGetCancelBookingSelectors();
  const {
    managesOwnPens,
    requiredCatteryDataResult,
    requiredCatteryDataError,
  } = useGetRequiredCatteryDataForBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasBookingToCancelData) return;

    if (
      requiredCatteryDataResult !== "fulfilled" &&
      !requiredCatteryDataError
    ) {
      dispatch(getRequiredCatteryDataForBookingAsync({ catteryId }));
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
    requiredCatteryDataResult,
    requiredCatteryDataError,
  ]);
};

export default useFetchCatteryDetailsAvailabilityDocsToUpdateThunkUseEffect;
