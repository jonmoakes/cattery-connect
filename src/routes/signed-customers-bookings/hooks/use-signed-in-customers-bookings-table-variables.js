import { useMemo } from "react";

import useGetSignedInCustomersBookingsSelectors from "../../../hooks/selectors/use-get-signed-in-customers-bookings-selectors";
import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";

import SIGNED_IN_CUSTOMERS_BOOKINGS_TABLE_COLUMNS from "../signed-in-customers-bookings-table-columns";

import { defaultTableSize } from "../../../constants/ui-constants";

const useSignedInCustomersBookingsTableVariables = () => {
  const {
    customersBookings,
    signedInCustomersBookingsError,
    sortedCustomersBookings,
  } = useGetSignedInCustomersBookingsSelectors();
  const { catteryDetailsError } = useGetCatteryDetailsSelectors();

  const customersBookingsPageSizeFromLocalStorage = localStorage.getItem(
    "customersBookingsChosenTablePageSize"
  );

  const columns = useMemo(() => SIGNED_IN_CUSTOMERS_BOOKINGS_TABLE_COLUMNS, []);
  const data = useMemo(
    () => (customersBookings === undefined ? [] : sortedCustomersBookings),
    [customersBookings, sortedCustomersBookings]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "checkInDate", desc: true }],
      pageSize: customersBookingsPageSizeFromLocalStorage
        ? Number(customersBookingsPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [customersBookingsPageSizeFromLocalStorage]
  );

  return {
    columns,
    data,
    initialState,
    signedInCustomersBookingsError,
    catteryDetailsError,
  };
};

export default useSignedInCustomersBookingsTableVariables;
