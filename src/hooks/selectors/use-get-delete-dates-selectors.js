import { useSelector } from "react-redux";

import { selectDeleteDatesSelectors } from "../../store/delete-dates/selectors";

const useGetDeleteDatesSelectors = () => {
  const {
    dateDataToPass,
    getDateDocumentsToDeleteIsLoading,
    getDateDocumentsToDeleteResult,
    getDateDocumentsToDeleteError,
    deleteDateDocumentsIsLoading,
    deleteDateDocumentsResult,
    deleteDateDocumentsError,
    dateDocumentsToDelete,
  } = useSelector(selectDeleteDatesSelectors);

  const { catteryId, month, year } = dateDataToPass ?? {};

  return {
    dateDataToPass,
    catteryId,
    month,
    year,
    getDateDocumentsToDeleteIsLoading,
    getDateDocumentsToDeleteResult,
    getDateDocumentsToDeleteError,
    deleteDateDocumentsIsLoading,
    deleteDateDocumentsResult,
    deleteDateDocumentsError,
    dateDocumentsToDelete,
  };
};

export default useGetDeleteDatesSelectors;
