import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import useDeleteCustomerSuccessSwal from "./swals/use-delete-customer-success-swal";
import useDeleteCustomersCatsErrorSwal from "./swals/use-delete-customers-cats-error-swal";
import useCatsDeletedCustomerDeletionRejectedErrorSwal from "./swals/use-cats-deleted-customer-deletion-rejected-error-swal";

const useDeleteCustomerResultSwalUseEffect = () => {
  const {
    deleteCustomersCatsResult,
    deleteCustomersCatsError,
    deleteCustomerResult,
    deleteCustomerError,
  } = useGetCustomerDetailsManagementSelectors();
  const { deleteCustomerSuccessSwal } = useDeleteCustomerSuccessSwal();
  const { deleteCustomersCatsErrorSwal } = useDeleteCustomersCatsErrorSwal();
  const { catsDeletedCustomerDeletionRejectedErrorSwal } =
    useCatsDeletedCustomerDeletionRejectedErrorSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !deleteCustomersCatsResult &&
      !deleteCustomersCatsError &&
      !deleteCustomerResult &&
      !deleteCustomerError
    )
      return;

    if (
      deleteCustomersCatsResult === "fulfilled" &&
      deleteCustomerResult === "fulfilled"
    ) {
      deleteCustomerSuccessSwal();
    } else if (deleteCustomersCatsResult === "rejected") {
      deleteCustomersCatsErrorSwal();
    } else if (
      deleteCustomersCatsResult === "fulfilled" &&
      deleteCustomerResult === "rejected"
    ) {
      catsDeletedCustomerDeletionRejectedErrorSwal();
    }
  }, [
    dispatch,
    deleteCustomersCatsResult,
    deleteCustomersCatsError,
    deleteCustomerResult,
    deleteCustomerError,
    deleteCustomerSuccessSwal,
    deleteCustomersCatsErrorSwal,
    catsDeletedCustomerDeletionRejectedErrorSwal,
  ]);
};

export default useDeleteCustomerResultSwalUseEffect;
