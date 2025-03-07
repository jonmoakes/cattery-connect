import { useSelector } from "react-redux";

import { selectBookingsSelectors } from "../../store/bookings/selectors";

const useGetBookingsSelectors = () => {
  const {
    fetchOwnerBookingsIsLoading,
    ownerBookings,
    fetchOwnerBookingsResult,
    fetchOwnerBookingsError,
    sortedOwnerBookings,
    updatePaymentStatusIsLoading,
    updatePaymentStatusResult,
    updatePaymentStatusError,
  } = useSelector(selectBookingsSelectors);

  const atLeastOneBookingExists = ownerBookings && ownerBookings.length > 0;

  return {
    fetchOwnerBookingsIsLoading,
    ownerBookings,
    fetchOwnerBookingsResult,
    fetchOwnerBookingsError,
    atLeastOneBookingExists,
    sortedOwnerBookings,
    updatePaymentStatusIsLoading,
    updatePaymentStatusResult,
    updatePaymentStatusError,
  };
};

export default useGetBookingsSelectors;
