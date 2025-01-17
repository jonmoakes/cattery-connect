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
import useDeleteCustomerResultSwalUseEffect from "./all-customers-hooks/use-delete-customer-result-swal-use-effect";
import useIsOnline from "../../hooks/use-is-online";

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
  useDeleteCustomerResultSwalUseEffect();

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
              const scrollToTop = () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              };

              const handleCheck = () => {
                if (!row.isSelected) {
                  selectedFlatRows.forEach((selectedRow) => {
                    selectedRow.toggleRowSelected(false);
                  });
                  row.toggleRowSelected(true);

                  scrollToTop();
                } else {
                  row.toggleRowSelected(false);
                }
              };

              return (
                <TableCheckBox
                  onClick={handleCheck}
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
          {/* 
          {chosenEntry ? (
            <TableOptionsButtonDiv>
              <EntryOptionsButton
                className="edit"
                type="button"
                onClick={deleteCustomer}
              >
                edit customer
              </EntryOptionsButton>
              <EntryOptionsButton
                className="delete"
                type="button"
                onClick={deleteCustomer}
              >
                delete customer
              </EntryOptionsButton>
            </TableOptionsButtonDiv>
          ) : null} */}

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
