import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDeleteCustomerSelectors from "../../../hooks/selectors/use-get-delete-customer-selectors";
import { resetDeleteCustomerState } from "../../../store/delete-customer/delete-customer.slice";

import useFireSwal from "../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../strings/errors";

const useDeleteCustomerResultSwalUseEffect = () => {
  const { deleteCustomerResult, deleteCustomerError } =
    useGetDeleteCustomerSelectors();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!deleteCustomerResult && !deleteCustomerError) return;

    if (deleteCustomerResult === "fulfilled") {
      fireSwal(
        "success",
        "the customer was deleted!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteCustomerState());
        }
      });
    } else {
      const error = deleteCustomerError;
      fireSwal(
        "error",
        errorReceivedMessage("error deleting customer..", error),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteCustomerState());
        }
      });
    }
  }, [fireSwal, deleteCustomerError, deleteCustomerResult, dispatch]);
};

export default useDeleteCustomerResultSwalUseEffect;
