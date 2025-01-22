import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";
import useIsOnline from "../../hooks/use-is-online";
import useHandleClickTableCheckbox from "../../components/tables/table-hooks/use-handle-click-table-checkbox";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import AllCatsTableButtons from "./all-cats-table-buttons.component";

const AllCatsTable = () => {
  const {
    columns,
    data,
    initialState,
    hasCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
  } = useAllCatsTableVariables();
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
      if (hasCatsOwnerDetails) {
        hooks.visibleColumns.push((columns) => {
          return [...columns];
        });
      } else {
        hooks.visibleColumns.push((columns) => {
          return [
            {
              Cell: ({ row, selectedFlatRows }) => {
                return (
                  <>
                    <TableCheckBox
                      onClick={() =>
                        handleClickTableCheckbox(row, selectedFlatRows)
                      }
                      {...row.getToggleRowSelectedProps()}
                    />
                  </>
                );
              },
            },
            ...columns,
          ];
        });
      }
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [value, setValue] = useState(globalFilter);

  const shouldHideHeaders = !rows.length;
  const checkedEntry = selectedFlatRows.map((row) => row.original);
  const chosenEntry = checkedEntry[0];
  const selectedCatsOwnerCustomerId = chosenEntry ? chosenEntry.customerId : "";
  const customerDocumentId = chosenEntry ? chosenEntry.customerDocumentId : "";
  const catsName = chosenEntry ? chosenEntry.catsName : "";

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : getAllCatsError || getCatsOwnerDetailsError ? (
        <ShowFetchErrors />
      ) : (
        <>
          {/* <NoCatsFound {...{ data }} /> */}

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

          <AllCatsTableButtons
            {...{
              chosenEntry,
              selectedCatsOwnerCustomerId,
              catsName,
              customerDocumentId,
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

export default AllCatsTable;
