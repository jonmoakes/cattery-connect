import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useAllCustomersTableVariables from "./all-customers-hooks/all-customers-table-variables";
import useIsOnline from "../../hooks/use-is-online";
import useHandleClickTableCheckbox from "../../components/tables/table-hooks/use-handle-click-table-checkbox";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoCustomersFound from "./no-customers-found.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import EditAndDeleteCustomerButtons from "./edit-and-delete-customer-buttons.component";

const AllCustomersTable = () => {
  const { getAllCustomersError } = useGetAllCustomersSelectors();
  const { columns, data, initialState } = useAllCustomersTableVariables();
  const { handleClickTableCheckbox } = useHandleClickTableCheckbox();

  const { isOnline } = useIsOnline();

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
        return [
          {
            Cell: ({ row, selectedFlatRows }) => {
              return (
                <TableCheckBox
                  onClick={() =>
                    handleClickTableCheckbox(row, selectedFlatRows)
                  }
                  {...row.getToggleRowSelectedProps()}
                />
              );
            },
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [value, setValue] = useState(globalFilter);

  const shouldHideHeaders = !rows.length;
  const checkedEntry = selectedFlatRows.map((row) => row.original);
  const chosenEntry = checkedEntry[0];

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : getAllCustomersError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoCustomersFound {...{ data }} />

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

          <EditAndDeleteCustomerButtons {...{ chosenEntry }} />

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
      )}
    </>
  );
};

export default AllCustomersTable;
