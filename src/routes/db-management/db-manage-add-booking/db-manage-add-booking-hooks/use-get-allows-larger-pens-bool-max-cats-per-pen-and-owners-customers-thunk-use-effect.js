import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { getAllowsLargerPensBoolAndMaxCatsPerPenAsync } from "../../../../store/db-manage-add-booking/db-manage-add-booking.thunks";
import { getAllOwnersCustomersAsync } from "../../../../store/get-all-customers/get-all-customers.thunks";

const useGetAllowsLargerPensBoolMaxCatsPerPenAndOwnersCustomersThunkUseEffect =
  () => {
    const { catteryId } = useGetCurrentUserSelectors();
    const { catteryAllowsLargerPensResult, catteryAllowsLargerPensBool } =
      useGetDbManageAddBookingSelectors();

    const dispatch = useDispatch();

    useEffect(() => {
      if (
        catteryAllowsLargerPensResult &&
        (catteryAllowsLargerPensBool === true ||
          catteryAllowsLargerPensBool === false)
      )
        return;
      dispatch(
        getAllowsLargerPensBoolAndMaxCatsPerPenAsync({ catteryId })
      ).then((resultAction) => {
        if (
          getAllowsLargerPensBoolAndMaxCatsPerPenAsync.rejected.match(
            resultAction
          )
        ) {
          return;
        } else {
          dispatch(
            getAllOwnersCustomersAsync({
              catteryId,
            })
          );
        }
      });
    }, [
      catteryAllowsLargerPensResult,
      catteryAllowsLargerPensBool,
      catteryId,
      dispatch,
    ]);
  };

export default useGetAllowsLargerPensBoolMaxCatsPerPenAndOwnersCustomersThunkUseEffect;
