import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../../hooks/selectors/use-get-customer-details-management-selectors";
import {
  resetDeleteCustomersCatsError,
  resetDeleteCustomersCatsResult,
} from "../../../../store/customer-details-management/customer-details-management.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors";

const useDeleteCustomersCatsErrorSwal = () => {
  const { deleteCustomersCatsError } =
    useGetCustomerDetailsManagementSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const deleteCustomersCatsErrorSwal = useCallback(() => {
    fireSwal(
      "error",
      errorReceivedMessage(
        "sorry, there was an error deleting the customers cats so the deletion was cancelled.",
        deleteCustomersCatsError
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetDeleteCustomersCatsResult());
        dispatch(resetDeleteCustomersCatsError());
      }
    });
  }, [deleteCustomersCatsError, fireSwal, dispatch]);

  return { deleteCustomersCatsErrorSwal };
};

export default useDeleteCustomersCatsErrorSwal;
