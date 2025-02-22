import useTableWithCustomColumns from "../../components/tables/table-hooks/use-table-with-custom-columns";
import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoCatsFound from "./no-cats-found.component";
import RenderTable from "../../components/tables/render-table.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import EditCatButton from "../../components/tables/edit-cat-button.component";
import DeleteCatButton from "../../components/tables/delete-cat-button.component";

import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

import { viewCustomersCatsRoute } from "../../strings/routes";

const ViewCustomersCatsTable = () => {
  const { columns, data, initialState, individualCustomersCatsError } =
    useViewCustomersCatsVariables();
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
  const catsName = chosenEntry ? chosenEntry.catsName : "";
  const catsDocumentId = chosenEntry ? chosenEntry.$id : "";

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : individualCustomersCatsError ? (
        <ShowFetchErrors />
      ) : !data.length ? (
        <NoCatsFound />
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
              <EditCatButton
                {...{
                  chosenEntry,
                  fromRoute: viewCustomersCatsRoute,
                  catsName,
                }}
              />
              <DeleteCatButton {...{ catsName, catsDocumentId }} />
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

export default ViewCustomersCatsTable;
