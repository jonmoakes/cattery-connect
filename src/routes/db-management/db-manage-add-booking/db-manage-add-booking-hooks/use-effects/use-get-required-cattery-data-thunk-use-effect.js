import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";
import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { getRequiredCatteryDataAsync } from "../../../../../store/db-manage-add-booking/db-manage-add-booking.thunks";
import { getAllOwnersCustomersAsync } from "../../../../../store/get-all-customers/get-all-customers.thunks";

const useGetRequiredCatteryDataThunkUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { requiredCatteryDataResult, catteryAllowsLargerPensBool } =
    useGetDbManageAddBookingSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      requiredCatteryDataResult &&
      (catteryAllowsLargerPensBool === true ||
        catteryAllowsLargerPensBool === false)
    )
      return;
    dispatch(getRequiredCatteryDataAsync({ catteryId })).then(
      (resultAction) => {
        if (getRequiredCatteryDataAsync.rejected.match(resultAction)) {
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

export default useGetRequiredCatteryDataThunkUseEffect;
