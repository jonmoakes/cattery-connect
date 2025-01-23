import { useMemo } from "react";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import VIEW_CUSTOMERS_CATS_TABLE_COLUMNS from "../view-customers-cats-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useViewCustomersCatsVariables = (chosenEntry) => {
  const { detailsRequiredForCatManagement } =
    useGetCatDetailsManagementSelectors();
  const { customerName, catDetails, customerDocumentId } =
    detailsRequiredForCatManagement ?? {};

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

  // title-and-add-cat-link
  const hasCustomerIDAndAtLeastOneCat = customerDocumentId && data.length;

  // view-customers-cats-delete-cat-button
  const catDetailsAfterRemovingCatForDeletion = data
    ? data.filter((cat) => cat.catsId !== (chosenEntry && chosenEntry.catsId))
    : [];

  return {
    columns,
    data,
    initialState,
    customerName,
    customerDocumentId,
    hasCustomerIDAndAtLeastOneCat,
    catDetails,
    catDetailsAfterRemovingCatForDeletion,
  };
};

export default useViewCustomersCatsVariables;
