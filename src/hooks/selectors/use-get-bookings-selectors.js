import { useSelector } from "react-redux";

import { selectBookingsSelectors } from "../../store/bookings/bookings.slice";

const useGetBookingsSelectors = () => {
  const {
    fetchOwnerBookingsIsLoading,
    ownerBookings,
    fetchOwnerBookingsResult,
    fetchOwnerBookingsError,
    sortedOwnerBookings,
  } = useSelector(selectBookingsSelectors);

  const atLeastOneBookingExists = ownerBookings && ownerBookings.length > 0;

  return {
    fetchOwnerBookingsIsLoading,
    ownerBookings,
    fetchOwnerBookingsResult,
    fetchOwnerBookingsError,
    atLeastOneBookingExists,
    sortedOwnerBookings,
  };
};

export default useGetBookingsSelectors;
