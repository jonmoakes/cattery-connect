import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchSignedInCustomersBookingsAsync } from "../../../store/signed-in-customers-bookings/signed-in-customers-bookings.thunks";

const useFetchCustomersBookingsThunkUseEffect = () => {
  const { customerId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!customerId) return;
    dispatch(fetchSignedInCustomersBookingsAsync({ customerId }));
  }, [dispatch, customerId]);
};

export default useFetchCustomersBookingsThunkUseEffect;
