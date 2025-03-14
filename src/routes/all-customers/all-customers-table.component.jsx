import useTableWithCustomColumns from "../../components/tables/table-hooks/use-table-with-custom-columns";
import useAllCustomersTableVariables from "./all-customers-hooks/use-all-customers-table-variables";
import useIsOnline from "../../hooks/use-is-online";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoCustomersFound from "../../components/no-customers-found/no-customers-found.component";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import EditCustomerButton from "./edit-customer-button.component";
import DeleteCustomerButton from "./delete-customer-button.component";

import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const AllCustomersTable = () => {
  const { columns, data, initialState, getAllCustomersError } =
    useAllCustomersTableVariables();

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
    selectedFlatRows,
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
  const checkedEntry = selectedFlatRows.map((row) => row.original);
  const chosenEntry = checkedEntry[0];

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : getAllCustomersError ? (
        <ShowFetchErrors />
      ) : !data.length ? (
        <NoCustomersFound />
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

          {chosenEntry ? (
            <TableOptionsButtonDiv>
              <EditCustomerButton {...{ chosenEntry }} />
              <DeleteCustomerButton {...{ chosenEntry }} />
            </TableOptionsButtonDiv>
          ) : null}

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
