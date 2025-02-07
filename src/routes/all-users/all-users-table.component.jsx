import useTableWithCustomColumns from "../../components/tables/table-hooks/use-table-with-custom-columns";
import useAllUsersTableVariables from "./all-users-hooks/use-all-users-table-variables";
import useIsOnline from "../../hooks/use-is-online";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoUsersFound from "./no-users-found.component";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";

const AllUsersTable = () => {
  const { allUsersError, columns, data, initialState } =
    useAllUsersTableVariables();
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
      ) : allUsersError ? (
        <ShowFetchErrors />
      ) : !data.length ? (
        <NoUsersFound />
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
        </>
      )}
    </>
  );
};

export default AllUsersTable;
