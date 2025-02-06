import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";
import useHandleClickTableCheckbox from "./use-handle-click-table-checkbox";

import TableCheckBox from "../table-checkbox";

const useTableWithCustomColumns = ({
  columns,
  data,
  initialState,
  hasCatsOwnerDetails = false,
}) => {
  const { handleClickTableCheckbox } = useHandleClickTableCheckbox();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useColumnOrder,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        // no checkbox when having clicked show owner details button
        if (hasCatsOwnerDetails) {
          return [...columns];
        } else {
          return [
            {
              Cell: ({ row, selectedFlatRows }) => {
                return (
                  <>
                    <TableCheckBox
                      onClick={() =>
                        handleClickTableCheckbox(row, selectedFlatRows)
                      }
                      {...row.getToggleRowSelectedProps()}
                    />
                  </>
                );
              },
            },
            ...columns,
          ];
        }
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [value, setValue] = useState(globalFilter);

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
    pageSize,
    pageIndex,
    value,
    setValue,
    globalFilter,
  };
};

export default useTableWithCustomColumns;
