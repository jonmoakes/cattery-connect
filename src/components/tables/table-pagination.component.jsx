import { useLocation } from "react-router-dom";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { PaginationDiv, PaginationTextDiv } from "../../styles/div/div.styles";
import { PaginationPageButton } from "../../styles/button/button.styles";
import {
  PaginationInput,
  PaginationOption,
  PaginationSelect,
} from "../../styles/form/form.styles";

import { defaultTableSize } from "../../constants/constants";
import {
  allCatsRoute,
  allCustomersRoute,
  allUsersRoute,
  bookingsRoute,
} from "../../strings/routes";

const TablePagination = ({
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
  data,
  rows,
}) => {
  const location = useLocation();
  const path = location.pathname;

  const setTablePageSizeBasedOnRoute = (selectedPageSize) => {
    switch (path) {
      case allCustomersRoute:
        localStorage.setItem(
          "allCustomersChosenTablePageSize",
          selectedPageSize
        );
        break;
      case allCatsRoute:
        localStorage.setItem("allCatsChosenTablePageSize", selectedPageSize);
        break;
      case allUsersRoute:
        localStorage.setItem("allUsersChosenTablePageSize", selectedPageSize);
        break;
      case bookingsRoute:
        localStorage.setItem("bookingsChosenTablePageSize", selectedPageSize);
        break;
      default:
        return;
    }
  };

  const pageSizeOptions = [
    { value: 5, id: crypto.randomUUID() },
    { value: defaultTableSize, id: crypto.randomUUID() },
    { value: 20, id: crypto.randomUUID() },
    { value: 50, id: crypto.randomUUID() },
    { value: 75, id: crypto.randomUUID() },
    { value: 100, id: crypto.randomUUID() },
    { value: 150, id: crypto.randomUUID() },
    { value: 200, id: crypto.randomUUID() },
  ];

  return (
    <>
      {data.length > defaultTableSize && rows.length ? (
        <PaginationDiv>
          <div>
            <CustomBalancedText>
              showing Page {pageIndex + 1} Of {pageOptions.length}
            </CustomBalancedText>

            <PaginationPageButton
              onClick={() => {
                gotoPage(0);
              }}
              disabled={!canPreviousPage}
            >
              &#10094;&#10094;
            </PaginationPageButton>

            <PaginationPageButton
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              &#10094;
            </PaginationPageButton>
            <PaginationPageButton
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              &#10095;
            </PaginationPageButton>

            <PaginationPageButton
              onClick={() => {
                gotoPage(pageCount - 1);
              }}
              disabled={!canNextPage}
            >
              &#10095;&#10095;
            </PaginationPageButton>

            <PaginationTextDiv>
              <CustomBalancedText>Or Go To Page: </CustomBalancedText>
              <PaginationInput
                type="number"
                onWheel={(e) => e.target.blur()}
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </PaginationTextDiv>

            <PaginationTextDiv>
              <CustomBalancedText>choose row amount: </CustomBalancedText>
              <PaginationSelect
                value={pageSize}
                onChange={(e) => {
                  const selectedPageSize = e.target.value;
                  setTablePageSizeBasedOnRoute(selectedPageSize);
                  setPageSize(Number(selectedPageSize));
                }}
              >
                {pageSizeOptions.map(({ value, id }) => (
                  <PaginationOption key={id} value={value}>
                    Show {value} Rows
                  </PaginationOption>
                ))}
              </PaginationSelect>
            </PaginationTextDiv>
          </div>
        </PaginationDiv>
      ) : null}
    </>
  );
};

export default TablePagination;
