import { createSelector } from "@reduxjs/toolkit";

export const selectDeleteDatesSelectors = createSelector(
  (state) => state.deleteDates,
  (deleteDates) => ({
    dateDataToPass: deleteDates.dateDataToPass,
    getDateDocumentsToDeleteIsLoading:
      deleteDates.getDateDocumentsToDeleteIsLoading,
    getDateDocumentsToDeleteResult: deleteDates.getDateDocumentsToDeleteResult,
    getDateDocumentsToDeleteError: deleteDates.getDateDocumentsToDeleteError,
    dateDocumentsToDelete: deleteDates.dateDocumentsToDelete,
    deleteDateDocumentsIsLoading: deleteDates.deleteDateDocumentsIsLoading,
    deleteDateDocumentsResult: deleteDates.deleteDateDocumentsResult,
    deleteDateDocumentsError: deleteDates.deleteDateDocumentsError,
  })
);
