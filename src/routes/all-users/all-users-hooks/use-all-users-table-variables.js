import { useMemo } from "react";

import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";

import { defaultTableSize } from "../../../constants/ui-constants";
import ALL_USERS_TABLE_COLUMNS from "../all-users-table-columns";

const useAllUsersTableVariables = () => {
  const { allUsers, allUsersError } = useGetAllUsersSelectors();

  const allUsersPageSizeFromLocalStorage = localStorage.getItem(
    "allUsersChosenTablePageSize"
  );

  const columns = useMemo(() => ALL_USERS_TABLE_COLUMNS, []);

  //all users can potentially be undefined in the selector, so need to make it an empty array if it is.
  // if there are no users in the db, it will return an empty array anyway which means the table can handle it.
  const data = useMemo(
    () => (allUsers === undefined ? [] : allUsers),
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
