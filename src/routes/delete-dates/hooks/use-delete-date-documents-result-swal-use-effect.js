import { useEffect } from "react";

import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";

import useDeleteDateDocumentsSuccessSwal from "./swals/use-delete-date-documents-success-swal";
import useDeleteDateDocumentsErrorSwal from "./swals/use-delete-date-documents-error-swal";

const useDeleteDateDocumentsResultSwalUseEffect = () => {
  const { deleteDateDocumentsResult, deleteDateDocumentsError } =
    useGetDeleteDatesSelectors();
  const { deleteDateDocumentsSuccessSwal } =
    useDeleteDateDocumentsSuccessSwal();
  const { deleteDateDocumentsErrorSwal } = useDeleteDateDocumentsErrorSwal();

  useEffect(() => {
    if (!deleteDateDocumentsResult && !deleteDateDocumentsError) return;

    if (deleteDateDocumentsResult === "fulfilled") {
      deleteDateDocumentsSuccessSwal();
    } else if (deleteDateDocumentsResult === "rejected") {
      deleteDateDocumentsErrorSwal(deleteDateDocumentsError);
    }
  }, [
    deleteDateDocumentsResult,
    deleteDateDocumentsError,
    deleteDateDocumentsSuccessSwal,
    deleteDateDocumentsErrorSwal,
  ]);
};

export default useDeleteDateDocumentsResultSwalUseEffect;
