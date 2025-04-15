import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";

import { getCatteryDetailsAsync } from "../../../store/cattery-details/cattery-details-thunks";

const useGetCurrentPricesThunkUseEffect = () => {
  const { catteryDetailsResult } = useGetCatteryDetailsSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (catteryDetailsResult) return;
    dispatch(getCatteryDetailsAsync({ catteryId }));
  }, [catteryId, dispatch, catteryDetailsResult]);
};

export default useGetCurrentPricesThunkUseEffect;
