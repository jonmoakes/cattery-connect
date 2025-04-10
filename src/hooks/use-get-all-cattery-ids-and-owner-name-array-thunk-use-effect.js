import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";

import { fetchCatteryIdsAndOwnerNameArrayAsync } from "../store/get-all-users/get-all-users.thunks";

const useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect = () => {
  const { currentUser, role } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (currentUser && role !== "admin")) return;
    dispatch(fetchCatteryIdsAndOwnerNameArrayAsync());
  }, [dispatch, currentUser, role]);
};

export default useGetAllCatteryIdsAndOwnerNameArrayThunkUseEffect;
