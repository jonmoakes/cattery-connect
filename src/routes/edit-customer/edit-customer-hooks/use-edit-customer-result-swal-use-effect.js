import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import {
  resetEditCustomerResult,
  resetEditCustomerError,
} from "../../../store/customer-details-management/customer-details-management.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import { allCustomersRoute } from "../../../strings/routes";

const useEditCustomerResultSwalUseEffect = () => {
  const { editCustomerResult, editCustomerError } =
    useGetCustomerDetailsManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!editCustomerResult && !editCustomerError) return;

    if (editCustomerResult === "fulfilled") {
      fireSwal(
        "success",
        "customer updated!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(allCustomersRoute);
        }
      });
    } else {
      const error = editCustomerError;
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
          dispatch(resetEditCustomerResult());
          dispatch(resetEditCustomerError());
        }
      });
    }
  }, [
    fireSwal,
    editCustomerResult,
    editCustomerError,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useEditCustomerResultSwalUseEffect;
