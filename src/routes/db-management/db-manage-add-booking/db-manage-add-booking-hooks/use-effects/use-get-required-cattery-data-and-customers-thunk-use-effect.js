import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";

import { getRequiredCatteryDataForBookingAsync } from "../../../../../store/required-cattery-data/required-cattery-data-for-booking.thunks";
import { getAllOwnersCustomersAsync } from "../../../../../store/get-all-customers/get-all-customers.thunks";

const useGetRequiredCatteryDataAndCustomersThunkUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { requiredCatteryDataResult, catteryAllowsLargerPensBool } =
    useGetRequiredCatteryDataForBookingSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      requiredCatteryDataResult &&
      (catteryAllowsLargerPensBool === true ||
        catteryAllowsLargerPensBool === false)
    )
      return;
    dispatch(getRequiredCatteryDataForBookingAsync({ catteryId })).then(
      (resultAction) => {
        if (
          getRequiredCatteryDataForBookingAsync.rejected.match(resultAction)
        ) {
          return;
        } else {
          dispatch(
            getAllOwnersCustomersAsync({
              catteryId,
            })
          );
        }
      }
    );
  }, [
    requiredCatteryDataResult,
    catteryAllowsLargerPensBool,
    catteryId,
    dispatch,
  ]);
};

export default useGetRequiredCatteryDataAndCustomersThunkUseEffect;
