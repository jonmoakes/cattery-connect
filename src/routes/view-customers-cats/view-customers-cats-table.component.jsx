import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useHandleClickTableCheckbox from "../../components/tables/table-hooks/use-handle-click-table-checkbox";
import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import NoCatsFound from "./no-cats-found.component";
import RenderTable from "../../components/tables/render-table.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import EditCatButton from "./edit-cat-button.component";
import DeleteCatButton from "./delete-cat-button.component";

import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const ViewCustomersCatsTable = () => {
  const { columns, data, initialState } = useCatsTableDataAndFunctions();
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
        <DeleteCatButton {...{ chosenEntry }} />
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
