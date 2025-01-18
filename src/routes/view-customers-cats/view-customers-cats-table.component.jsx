import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useViewCustomersCatsTableVariables from "./view-customers-cats-hooks/view-customers-cats-table-variables";
import useHandleClickTableCheckbox from "../../components/tables/table-hooks/use-handle-click-table-checkbox";

import NoCatsFound from "./no-cats-found.component";
import RenderTable from "../../components/tables/render-table.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import EditAndDeleteCatButtons from "./edit-and-delete-cat-buttons.component";

const ViewCustomersCatsTable = ({ cats, customerDocumentId, customerName }) => {
  const { columns, data, initialState } =
    useViewCustomersCatsTableVariables(cats);
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

      <EditAndDeleteCatButtons {...{ data, chosenEntry, customerDocumentId }} />

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
