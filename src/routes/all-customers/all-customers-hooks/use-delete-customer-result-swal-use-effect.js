import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import {
  resetCustomerDetails,
  resetDeleteCustomerResult,
  resetDeleteCustomerError,
} from "../../../store/customer-details-management/customer-details-management.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";

const useDeleteCustomerResultSwalUseEffect = () => {
  const { deleteCustomerResult, deleteCustomerError } =
    useGetCustomerDetailsManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const [deleteSwalWasConfirmed, setDeleteSwalWasConfirmed] = useState(false);

  useEffect(() => {
    if (
      (!deleteCustomerResult && !deleteCustomerError) ||
      deleteSwalWasConfirmed
    )
      return;

    if (deleteCustomerResult === "fulfilled") {
      fireSwal(
        "success",
        "customer deleted!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setDeleteSwalWasConfirmed(true);
          dispatch(resetDeleteCustomerResult());
          dispatch(resetCustomerDetails());
        }
      });
    } else {
      const error = deleteCustomerError;
      fireSwal(
        "error",
        errorReceivedMessage("error adding customer..", error),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteCustomerResult());
          dispatch(resetDeleteCustomerError());
          dispatch(resetCustomerDetails());
        }
      });
    }
  }, [
    fireSwal,
    deleteCustomerResult,
    deleteCustomerError,
    dispatch,
    hamburgerHandlerNavigate,
    deleteSwalWasConfirmed,
  ]);
};

export default useDeleteCustomerResultSwalUseEffect;
