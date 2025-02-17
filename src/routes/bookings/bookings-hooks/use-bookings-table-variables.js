import { useMemo } from "react";

import useGetBookingsSelectors from "../../../hooks/selectors/use-get-bookings-selectors";

import { defaultTableSize } from "../../../constants/constants";
import BOOKINGS_TABLE_COLUMNS from "../bookings-table-columns";

const useBookingsTableVariables = () => {
  const {
    ownerBookings,
    fetchOwnerBookingsError,
    atLeastOneBookingExists,
    sortedOwnerBookings,
  } = useGetBookingsSelectors();

  const bookingsPageSizeFromLocalStorage = localStorage.getItem(
    "bookingsChosenTablePageSize"
  );

  const columns = useMemo(() => BOOKINGS_TABLE_COLUMNS, []);
  const data = useMemo(
    () => (ownerBookings === undefined ? [] : sortedOwnerBookings),
    [ownerBookings, sortedOwnerBookings]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "checkInDate", desc: true }],
      pageSize: bookingsPageSizeFromLocalStorage
        ? Number(bookingsPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [bookingsPageSizeFromLocalStorage]
  );

  return {
    columns,
    data,
    initialState,
    fetchOwnerBookingsError,
    atLeastOneBookingExists,
  };
};

export default useBookingsTableVariables;
