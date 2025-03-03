import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import { fetchOwnerBookingsAsync } from "../../../../store/bookings/bookings.thunks";

const useFetchOwnerBookingsThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    dispatch(fetchOwnerBookingsAsync({ catteryId }));
  }, [currentUser, dispatch, catteryId]);
};

export default useFetchOwnerBookingsThunkUseEffect;
