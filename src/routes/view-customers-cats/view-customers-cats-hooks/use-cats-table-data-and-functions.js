import { useMemo } from "react";
import { useDispatch } from "react-redux";

import useGetDataToBePassedSelectors from "../../../hooks/selectors/use-get-data-to-be-passed-selectors";
import { setDataToBePassed } from "../../../store/data-to-be-passed/data-to-be-passed.slice";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { addCatRoute } from "../../../strings/routes";

import VIEW_CUSTOMERS_CATS_TABLE_COLUMNS from "../view-customers-cats-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useCatsTableDataAndFunctions = () => {
  const { dataToBePassed } = useGetDataToBePassedSelectors();
  const { customerName, catDetails, customerDocumentId } = dataToBePassed ?? {};

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  // table
  const columns = useMemo(() => VIEW_CUSTOMERS_CATS_TABLE_COLUMNS, []);
  const data = useMemo(() => {
    return catDetails ? JSON.parse(catDetails) : [];
  }, [catDetails]);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "catsName", desc: false }],
      pageSize: defaultTableSize,
    }),
    []
  );

  // title and add cat link
  const hasCustomerIDAndAtLeastOneCat = customerDocumentId && data.length;
  const passCustomerIdToAddCatRoute = () => {
    dispatch(setDataToBePassed({ customerDocumentId }));
    hamburgerHandlerNavigate(addCatRoute);
  };

  // no cats found
  const goToAddCatRoute = () => {
    dispatch(setDataToBePassed({ customerDocumentId }));
    hamburgerHandlerNavigate(addCatRoute);
  };

  return {
    customerName,
    customerDocumentId,
    hasCustomerIDAndAtLeastOneCat,
    passCustomerIdToAddCatRoute,
    columns,
    data,
    initialState,
    goToAddCatRoute,
  };
};

export default useCatsTableDataAndFunctions;
