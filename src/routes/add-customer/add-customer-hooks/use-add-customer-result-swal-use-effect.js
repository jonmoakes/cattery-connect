import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";
import {
  resetCustomerResult,
  resetCustomerError,
} from "../../../store/customer/customer.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import { accountRoute } from "../../../strings/routes";

const useAddCustomerResultSwalUseEffect = () => {
  const { customerResult, customerError } = useGetCustomerDetailsSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!customerResult && !customerError) return;

    if (customerResult === "fulfilled") {
      fireSwal("success", "customer added!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        }
      );
    } else {
      const error = customerError;
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
          dispatch(resetCustomerResult());
          dispatch(resetCustomerError());
        }
      });
    }
  }, [
    fireSwal,
    customerError,
    customerResult,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useAddCustomerResultSwalUseEffect;
