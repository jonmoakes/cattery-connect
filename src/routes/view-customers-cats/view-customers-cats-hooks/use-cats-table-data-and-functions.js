import { useMemo } from "react";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { addCatRoute } from "../../../strings/routes";

import VIEW_CUSTOMERS_CATS_TABLE_COLUMNS from "../view-customers-cats-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useCatsTableDataAndFunctions = () => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();
  const { customerName, catDetails, customerDocumentId } =
    detailsRequiredForCatManagement ?? {};

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

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

  // title and add cat link & no cats found
  const hasCustomerIDAndAtLeastOneCat = customerDocumentId && data.length;
  const goToAddCatRoutePassingNoExtraData = () => {
    hamburgerHandlerNavigate(addCatRoute);
  };

  return {
    customerName,
    customerDocumentId,
    hasCustomerIDAndAtLeastOneCat,
    goToAddCatRoutePassingNoExtraData,
    columns,
    data,
    initialState,
  };
};

export default useCatsTableDataAndFunctions;
