import { useMemo } from "react";

import useGetAllCatsSelectors from "../../../hooks/selectors/use-get-all-cats-selectors";

import { defaultTableSize } from "../../../constants/constants";
import ALL_CATS_TABLE_COLUMNS from "../all-cats-columns/all-cats-table-columns";
import CAT_OWNER_TABLE_COLUMNS from "../all-cats-columns/cat-owner-table-columns";

const useAllCatsTableVariables = () => {
  const {
    getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading,
    allCats,
    selectedCatsName,
    selectedCatsOwnerCustomerDocumentId,
    selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
  } = useGetAllCatsSelectors();

  const allCatsPageSizeFromLocalStorage = localStorage.getItem(
    "allCatsChosenTablePageSize"
  );

  const hasCatsOwnerDetails = Object.keys(selectedCatsOwnerDetails).length > 0;

  const columns = useMemo(
    () =>
      !hasCatsOwnerDetails ? ALL_CATS_TABLE_COLUMNS : CAT_OWNER_TABLE_COLUMNS,
    [hasCatsOwnerDetails]
  );
  const data = useMemo(
    () => (!hasCatsOwnerDetails ? allCats : selectedCatsOwnerDetails),
    [allCats, hasCatsOwnerDetails, selectedCatsOwnerDetails]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "customerName", desc: false }],
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
    allCats,
    selectedCatsName,
    selectedCatsOwnerCustomerDocumentId,
    selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails,
    getAllCatsError,
    getCatsOwnerDetailsError,
    hasCatsOwnerDetails,
  };
};

export default useAllCatsTableVariables;
