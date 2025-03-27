import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useGetCatteryDetailsSelectors from "../../../../hooks/selectors/use-get-cattery-details-selectors";
import { getAllOwnersCustomersAsync } from "../../../../store/get-all-customers/get-all-customers.thunks";
import { getCatteryDetailsAsync } from "../../../../store/cattery-details/cattery-details-thunks";

const useGetCatteryDataAndCustomersThunkUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { catteryDetailsResult } = useGetCatteryDetailsSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (catteryDetailsResult) return;
    dispatch(getCatteryDetailsAsync({ catteryId })).then((resultAction) => {
      if (getCatteryDetailsAsync.fulfilled.match(resultAction)) {
        dispatch(
          getAllOwnersCustomersAsync({
            catteryId,
          })
        );
      }
    });
  }, [catteryDetailsResult, catteryId, dispatch]);
};

export default useGetCatteryDataAndCustomersThunkUseEffect;
