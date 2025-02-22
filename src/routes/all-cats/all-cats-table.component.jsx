import useTableWithCustomColumns from "../../components/tables/table-hooks/use-table-with-custom-columns";
import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";
import useIsOnline from "../../hooks/use-is-online";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import AllCatsNoCatsFound from "./all-cats-no-cats-found.component";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import AllCatsShowCatsOwnerDetailsButton from "./all-cats-buttons/all-cats-show-cats-owner-details-button.component";
import EditCatButton from "../../components/tables/edit-cat-button.component";
import DeleteCatButton from "../../components/tables/delete-cat-button.component";
import AllCatsShowAllCatsButton from "./all-cats-buttons/all-cats-show-all-cats-button.component";

import { TableOptionsButtonDiv } from "../../styles/div/div.styles";
import { allCatsRoute } from "../../strings/routes";

const AllCatsTable = () => {
  const {
    columns,
    data,
    initialState,
    hasCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
    getAllCustomersError,
  } = useAllCatsTableVariables();

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
    hasCatsOwnerDetails,
  });

  const shouldHideHeaders = !rows.length;
  const checkedEntry = selectedFlatRows.map((row) => row.original);
  const chosenEntry = checkedEntry[0];
  const selectedCatsOwnerCustomerId = chosenEntry ? chosenEntry.customerId : "";
  const catsName = chosenEntry ? chosenEntry.catsName : "";
  const catsDocumentId = chosenEntry ? chosenEntry.$id : "";

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : getAllCatsError ||
        getCatsOwnerDetailsError ||
        getAllCustomersError ? (
        <ShowFetchErrors />
      ) : !data.length ? (
        <AllCatsNoCatsFound />
      ) : (
        <>
          {!hasCatsOwnerDetails ? (
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
          ) : null}

          {chosenEntry ? (
            <TableOptionsButtonDiv>
              <AllCatsShowCatsOwnerDetailsButton
                {...{ selectedCatsOwnerCustomerId, catsName }}
              />
              <EditCatButton
                {...{ chosenEntry, fromRoute: allCatsRoute, catsName }}
              />
              <DeleteCatButton {...{ catsName, catsDocumentId }} />
            </TableOptionsButtonDiv>
          ) : hasCatsOwnerDetails ? (
            <AllCatsShowAllCatsButton />
          ) : null}

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

export default AllCatsTable;
