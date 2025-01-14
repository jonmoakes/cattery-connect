import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";
import {
  resetAddCustomerResult,
  resetAddCustomerError,
} from "../../../store/add-customer/add-customer.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import { accountRoute } from "../../../strings/routes";

const useAddCustomerResultSwalUseEffect = () => {
  const { addCustomerResult, addCustomerError } =
    useGetAddCustomerDetailsSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!addCustomerResult && !addCustomerError) return;

    if (addCustomerResult === "fulfilled") {
      fireSwal("success", "customer added!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        }
      );
    } else {
      const error = addCustomerError;
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
          dispatch(resetAddCustomerResult());
          dispatch(resetAddCustomerError());
        }
      });
    }
  }, [
    fireSwal,
    addCustomerError,
    addCustomerResult,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useAddCustomerResultSwalUseEffect;
