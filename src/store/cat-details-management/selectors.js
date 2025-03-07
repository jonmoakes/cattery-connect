import { createSelector } from "@reduxjs/toolkit";

export const selectCatDetailsManagementSelectors = createSelector(
  (state) => state.catDetailsManagement,
  (catDetailsManagement) => ({
    detailsRequiredForCatManagement:
      catDetailsManagement.detailsRequiredForCatManagement,
    catDetailManagementIsLoading:
      catDetailsManagement.catDetailManagementIsLoading,
    catDetails: catDetailsManagement.catDetails,
    catDetailsForFormComparison:
      catDetailsManagement.catDetailsForFormComparison,
    catDetailsManagementResult: catDetailsManagement.catDetailsManagementResult,
    catDetailsManagementError: catDetailsManagement.catDetailsManagementError,
    deleteCatResult: catDetailsManagement.deleteCatResult,
    deleteCatError: catDetailsManagement.deleteCatError,
  })
);
