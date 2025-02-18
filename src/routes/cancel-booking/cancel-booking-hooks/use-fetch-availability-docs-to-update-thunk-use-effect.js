import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useCancelBookingVariables from "./use-cancel-booking-variables";
import { fetchAvailabilityDocsToUpdateAsync } from "../../../store/cancel-booking/cancel-booking.thunks";

const useFetchAvailabilityDocsToUpdateThunkUseEffect = () => {
  const { hasDataPassedFromBookingsTable, dataFromBooking } =
    useCancelBookingVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasDataPassedFromBookingsTable) return;
    dispatch(fetchAvailabilityDocsToUpdateAsync({ dataFromBooking }));
  }, [dataFromBooking, dispatch, hasDataPassedFromBookingsTable]);
};

export default useFetchAvailabilityDocsToUpdateThunkUseEffect;
