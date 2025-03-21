import useTableWithCustomColumns from "../../components/tables/table-hooks/use-table-with-custom-columns";
import useSignedInCustomersBookingsTableVariables from "./hooks/use-signed-in-customers-bookings-table-variables";
import useIsOnline from "../../hooks/use-is-online";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoBookingsFound from "./no-bookings-found.component";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";

const SignedInCustomersBookingsTable = () => {
  const {
    columns,
    data,
    initialState,
    signedInCustomersBookingsError,
    catteryDetailsError,
  } = useSignedInCustomersBookingsTableVariables();

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
    setGlobalFilter,
    pageSize,
    pageIndex,
    value,
    setValue,
    globalFilter,
  } = useTableWithCustomColumns({
    columns,
    data,
    initialState,
  });

  const shouldHideHeaders = !rows.length;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : signedInCustomersBookingsError || catteryDetailsError ? (
        <ShowFetchErrors />
      ) : !data.length ? (
        <NoBookingsFound />
      ) : (
        <>
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
      )}
    </>
  );
};

export default SignedInCustomersBookingsTable;
