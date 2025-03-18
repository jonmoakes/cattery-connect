import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import {
  resetEditCustomerResult,
  resetEditCustomerError,
  resetCustomerDetailsManagementState,
} from "../../../store/customer-details-management/customer-details-management.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import {
  allCustomersRoute,
  signedInCustomersDetailsRoute,
} from "../../../strings/routes";
import { useLocation } from "react-router-dom";

const useEditCustomerResultSwalUseEffect = () => {
  const { editCustomerResult, editCustomerError, name } =
    useGetCustomerDetailsManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const location = useLocation();
  const fromRoute = location.state?.fromRoute;

  useEffect(() => {
    if (!editCustomerResult && !editCustomerError) return;

    if (editCustomerResult === "fulfilled") {
      fireSwal("success", `${name} updated!`, "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetCustomerDetailsManagementState());
            if (!fromRoute) {
              hamburgerHandlerNavigate(allCustomersRoute);
            } else if (fromRoute === signedInCustomersDetailsRoute) {
              hamburgerHandlerNavigate(signedInCustomersDetailsRoute);
            }
          }
        }
      );
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
    name,
    fromRoute,
  ]);
};

export default useEditCustomerResultSwalUseEffect;
