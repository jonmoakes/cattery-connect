import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";

import { noDateDocumentsFoundString } from "../../../constants/error-constants";

const useGetDeleteDatesVariables = () => {
  const { getDateDocumentsToDeleteError, getDateDocumentsToDeleteResult } =
    useGetDeleteDatesSelectors();

  const hasDateFetchingThunkError =
    getDateDocumentsToDeleteError &&
    getDateDocumentsToDeleteError !== noDateDocumentsFoundString;

  const noDocumentsFound =
    getDateDocumentsToDeleteError &&
    getDateDocumentsToDeleteError === noDateDocumentsFoundString;

  const notAttemptedDateFetchYet =
    !getDateDocumentsToDeleteError && !getDateDocumentsToDeleteResult;

  const fetchDatesDocsSucceeded =
    getDateDocumentsToDeleteResult === "fulfilled";

  return {
    hasDateFetchingThunkError,
    noDocumentsFound,
    notAttemptedDateFetchYet,
    fetchDatesDocsSucceeded,
  };
};

export default useGetDeleteDatesVariables;
