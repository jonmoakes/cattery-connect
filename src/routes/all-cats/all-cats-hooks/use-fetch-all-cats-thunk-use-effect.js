import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchAllCatsAsync } from "../../../store/get-all-cats/get-all-cats.thunks";

const useFetchAllCatsThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(fetchAllCatsAsync({ catteryId }));
  }, [catteryId, dispatch, currentUser]);
};

export default useFetchAllCatsThunkUseEffect;
