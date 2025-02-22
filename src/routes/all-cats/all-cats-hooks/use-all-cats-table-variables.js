import { useMemo } from "react";

import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";

import { defaultTableSize } from "../../../constants/constants";
import ALL_CATS_TABLE_COLUMNS from "../all-cats-columns/all-cats-table-columns";
import CAT_OWNER_TABLE_COLUMNS from "../all-cats-columns/cat-owner-table-columns";
import useGetCatDetailsManagementSelectors from "../../../hooks/selectors/use-get-cat-details-management-selectors";
import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

const useAllCatsTableVariables = () => {
  const {
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    allCats,
    selectedCatsName,
    selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
  } = useGetAllCatsSelectors();
  const { catDetailManagementIsLoading } =
    useGetCatDetailsManagementSelectors();
  const { getAllCustomersError, atLeastOneCustomerExists } =
    useGetAllCustomerSelectors();

  const allCatsPageSizeFromLocalStorage = localStorage.getItem(
    "allCatsChosenTablePageSize"
  );

  const hasCatsOwnerDetails =
    selectedCatsOwnerDetails &&
    selectedCatsOwnerDetails.length &&
    Object.keys(selectedCatsOwnerDetails).length > 0
      ? true
      : false;

  const columns = useMemo(
    () =>
      !hasCatsOwnerDetails ? ALL_CATS_TABLE_COLUMNS : CAT_OWNER_TABLE_COLUMNS,
    [hasCatsOwnerDetails]
  );
  const data = useMemo(
    () =>
      !hasCatsOwnerDetails && allCats !== undefined
        ? allCats
        : !hasCatsOwnerDetails && allCats === undefined
        ? []
        : selectedCatsOwnerDetails === undefined
        ? []
        : selectedCatsOwnerDetails,
    [allCats, hasCatsOwnerDetails, selectedCatsOwnerDetails]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "ownersName", desc: false }],
      pageSize: allCatsPageSizeFromLocalStorage
        ? Number(allCatsPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [allCatsPageSizeFromLocalStorage]
  );

  return {
    columns,
    data,
    initialState,
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    catDetailManagementIsLoading,
    allCats,
    selectedCatsName,
    selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
    hasCatsOwnerDetails,
    getAllCustomersError,
    atLeastOneCustomerExists,
  };
};

export default useAllCatsTableVariables;
