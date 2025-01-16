import { useMemo } from "react";

import { defaultTableSize } from "../../../constants/constants";
import VIEW_CUSTOMERS_CATS_TABLE_COLUMNS from "../view-customers-cats-table-columns";

const useViewCustomersCatsTableVariables = (cats) => {
  const columns = useMemo(() => VIEW_CUSTOMERS_CATS_TABLE_COLUMNS, []);
  const data = useMemo(() => (cats ? cats : []), [cats]);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "catsName", desc: false }],
      pageSize: defaultTableSize,
    }),
    []
  );

  return { columns, data, initialState };
};

export default useViewCustomersCatsTableVariables;
