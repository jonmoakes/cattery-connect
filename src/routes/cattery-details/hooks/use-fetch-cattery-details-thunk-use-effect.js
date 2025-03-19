import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
import { getCatteryDetailsAsync } from "../../../store/cattery-details/cattery-details-thunks";

const useFetchCatteryDetailsThunkUseEffect = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { catteryDetailsResult } = useGetCatteryDetailsSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!catteryId || catteryDetailsResult) return;

    dispatch(getCatteryDetailsAsync({ catteryId }));
  }, [catteryId, catteryDetailsResult, dispatch]);
};

export default useFetchCatteryDetailsThunkUseEffect;
