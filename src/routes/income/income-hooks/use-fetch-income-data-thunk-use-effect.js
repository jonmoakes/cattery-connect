import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { requestIncomeDataAsync } from "../../../store/income/income.thunks";
import useGetIncomeSelectors from "../../../hooks/selectors/use-get-income-selectors";

const useFetchIncomeDataThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();
  const { monthOffset } = useGetIncomeSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!catteryId || !currentUser) return;

    dispatch(requestIncomeDataAsync({ catteryId, monthOffset }));
  }, [catteryId, currentUser, dispatch, monthOffset]);
};

export default useFetchIncomeDataThunkUseEffect;
