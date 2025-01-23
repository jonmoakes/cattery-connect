import useTableWithCustomColumns from "../../components/tables/table-hooks/use-table-with-custom-columns";
import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import NoCatsFound from "./no-cats-found.component";
import RenderTable from "../../components/tables/render-table.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import EditCatButton from "./edit-cat-button.component";
import ViewCustomersCatsDeleteCatButton from "./view-customers-cats-delete-cat-button.component";

import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const ViewCustomersCatsTable = () => {
  const { columns, data, initialState } = useCatsTableDataAndFunctions();

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
      <NoCatsFound />

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

      <TableOptionsButtonDiv>
        <EditCatButton {...{ chosenEntry }} />
        <ViewCustomersCatsDeleteCatButton {...{ chosenEntry }} />
      </TableOptionsButtonDiv>

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
