import { useMemo } from "react";

import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";

import VIEW_CUSTOMERS_CATS_TABLE_COLUMNS from "../view-customers-cats-table-columns";

import { defaultTableSize } from "../../../constants/constants";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";

const useViewCustomersCatsVariables = () => {
  const { detailsRequiredForCatManagement, catDetailManagementIsLoading } =
    useGetCatDetailsManagementSelectors();
  const {
    individualCustomersCatsIsLoading,
    individualCustomersCats,
    individualCustomersCatsError,
  } = useGetIndividualCustomersCatsSelectors();
  const { customerName, customerId } = detailsRequiredForCatManagement ?? {};

  const columns = useMemo(() => VIEW_CUSTOMERS_CATS_TABLE_COLUMNS, []);
  const data = useMemo(
    () =>
      individualCustomersCats === undefined ? [] : individualCustomersCats,
    [individualCustomersCats]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "catsName", desc: false }],
      pageSize: defaultTableSize,
    }),
    []
  );

  // title-and-add-cat-link
  const hasCustomerIDAndAtLeastOneCat =
    customerId && data.length > 0 ? true : false;

  return {
    catDetailManagementIsLoading,
    individualCustomersCatsIsLoading,
    individualCustomersCatsError,
    columns,
    data,
    initialState,
    customerName,
    hasCustomerIDAndAtLeastOneCat,
    customerId,
  };
};

export default useViewCustomersCatsVariables;
