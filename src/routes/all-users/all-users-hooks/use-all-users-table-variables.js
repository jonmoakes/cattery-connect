import { useMemo } from "react";

import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";

import { defaultTableSize } from "../../../constants/constants";
import ALL_USERS_TABLE_COLUMNS from "../all-users-table-columns";

const useAllUsersTableVariables = () => {
  const { allUsers, allUsersError } = useGetAllUsersSelectors();

  const allUsersPageSizeFromLocalStorage = localStorage.getItem(
    "allUsersChosenTablePageSize"
  );

  const columns = useMemo(() => ALL_USERS_TABLE_COLUMNS, []);
  const data = useMemo(
    () => (allUsers !== undefined ? allUsers : []),
    [allUsers]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "name", desc: false }],
      pageSize: allUsersPageSizeFromLocalStorage
        ? Number(allUsersPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [allUsersPageSizeFromLocalStorage]
  );

  return { allUsersError, columns, data, initialState };
};

export default useAllUsersTableVariables;
