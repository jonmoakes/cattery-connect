import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { getCatteryDetailsAsync } from "../../../store/cattery-details/cattery-details-thunks";

const useGetManagesOwnPensAndAllowsOnlinePaymentsValuesThunkUseEffect = () => {
  const { catteryDetailsResult } = useGetCatteryDetailsSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (catteryDetailsResult) return;

    dispatch(getCatteryDetailsAsync({ catteryId }));
  }, [catteryDetailsResult, dispatch, catteryId]);
};

export default useGetManagesOwnPensAndAllowsOnlinePaymentsValuesThunkUseEffect;
