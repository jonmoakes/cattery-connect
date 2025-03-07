import { createSelector } from "@reduxjs/toolkit";

export const selectGetAllCatsSelectors = createSelector(
  (state) => state.getAllCats,
  (getAllCats) => ({
    getAllCatsIsLoading: getAllCats.getAllCatsIsLoading,
    fetchOwnerDetailsIsLoading: getAllCats.fetchOwnerDetailsIsLoading,
    allCats: getAllCats.allCats,
    selectedCatsName: getAllCats.selectedCatsName,
    selectedCatsOwnerCustomerId: getAllCats.selectedCatsOwnerCustomerId,
    selectedCatsOwnerDetails: getAllCats.selectedCatsOwnerDetails,
    getAllCatsError: getAllCats.getAllCatsError,
    getCatsOwnerDetailsError: getAllCats.getCatsOwnerDetailsError,
  })
);
