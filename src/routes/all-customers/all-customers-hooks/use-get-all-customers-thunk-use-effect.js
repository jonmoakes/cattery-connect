import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { getAllOwnersCustomersAsync } from "../../../store/get-all-customers/get-all-customers.thunks";

const useGetAllCustomersThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getAllOwnersCustomersAsync({ catteryId }));
  }, [catteryId, dispatch, currentUser]);
};

export default useGetAllCustomersThunkUseEffect;
