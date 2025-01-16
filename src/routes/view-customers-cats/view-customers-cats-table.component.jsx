import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useViewCustomersCatsTableVariables from "./view-customers-cats-hooks.js/view-customers-cats-table-variables";

import NoCatsFound from "./no-cats-found.component";
import RenderTable from "../../components/tables/render-table.component";

import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";

const ViewCustomersCatsTable = ({ cats, customerDocumentId, customerName }) => {
  const { columns, data, initialState } =
    useViewCustomersCatsTableVariables(cats);

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
        return [...columns];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [value, setValue] = useState(globalFilter);

  const shouldHideHeaders = !rows.length;

  return (
    <>
      <NoCatsFound {...{ customerDocumentId, data, customerName }} />

      <TableSearchBox
        {...{
          rows,
          data,
          globalFilter,
          setGlobalFilter,
          value,
          setValue,
        }}
      />

      {data.length ? (
        <>
          <RenderTable
            {...{
              initialState,
              headerGroups: shouldHideHeaders ? [] : headerGroups,
              getTableProps,
              getTableBodyProps,
              page,
              prepareRow,
            }}
          />

          <TablePagination
            {...{
              data,
              rows,
              pageIndex,
              pageOptions,
              gotoPage,
              canPreviousPage,
              previousPage,
              nextPage,
              canNextPage,
              pageCount,
              pageSize,
              setPageSize,
            }}
          />
        </>
      ) : null}
    </>
  );
};

export default ViewCustomersCatsTable;
