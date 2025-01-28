import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";
import { fetchAllUsersDocumentsAsync } from "../store/get-all-users/get-all-users.thunks";

const useGetAllUsersThunkUseEffect = () => {
  const { currentUser, role } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (currentUser && role !== "admin")) return;
    dispatch(fetchAllUsersDocumentsAsync());
  }, [dispatch, currentUser, role]);
};

export default useGetAllUsersThunkUseEffect;
