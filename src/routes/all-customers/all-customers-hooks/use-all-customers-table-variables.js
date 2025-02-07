import { useMemo } from "react";

import useGetAllCustomersSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

import { defaultTableSize } from "../../../constants/constants";
import ALL_CUSTOMERS_TABLE_COLUMNS from "../all-customers-table-columns";

const useAllCustomersTableVariables = () => {
  const { allCustomers, getAllCustomersError, atLeastOneCustomerExists } =
    useGetAllCustomersSelectors();

  const allCustomersPageSizeFromLocalStorage = localStorage.getItem(
    "allCustomersChosenTablePageSize"
  );

  const columns = useMemo(() => ALL_CUSTOMERS_TABLE_COLUMNS, []);
  const data = useMemo(
    () => (allCustomers === undefined ? [] : allCustomers),
    [allCustomers]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "name", desc: false }],
      pageSize: allCustomersPageSizeFromLocalStorage
        ? Number(allCustomersPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [allCustomersPageSizeFromLocalStorage]
  );

  return {
    columns,
    data,
    initialState,
    getAllCustomersError,
    atLeastOneCustomerExists,
  };
};

export default useAllCustomersTableVariables;
