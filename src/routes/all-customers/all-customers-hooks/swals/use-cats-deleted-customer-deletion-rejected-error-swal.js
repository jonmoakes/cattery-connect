import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../../hooks/selectors/use-get-customer-details-management-selectors";

import { resetCustomerDetailsManagementState } from "../../../../store/customer-details-management/customer-details-management.slice";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { catsDeletedCustomerDeletionFailedMessage } from "../../../../strings/errors";

const useCatsDeletedCustomerDeletionRejectedErrorSwal = () => {
  const { deleteCustomerError } = useGetCustomerDetailsManagementSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const catsDeletedCustomerDeletionRejectedErrorSwal = useCallback(() => {
    fireSwal(
      "error",
      catsDeletedCustomerDeletionFailedMessage(deleteCustomerError),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetCustomerDetailsManagementState());
      }
    });
  }, [deleteCustomerError, fireSwal, dispatch]);

  return { catsDeletedCustomerDeletionRejectedErrorSwal };
};

export default useCatsDeletedCustomerDeletionRejectedErrorSwal;
