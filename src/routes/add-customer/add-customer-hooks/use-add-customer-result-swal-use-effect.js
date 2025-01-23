import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import {
  resetAddCustomerResult,
  resetAddCustomerError,
  resetCustomerDetailsManagementState,
} from "../../../store/customer-details-management/customer-details-management.slice";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors";
import { allCustomersRoute } from "../../../strings/routes";

const useAddCustomerResultSwalUseEffect = () => {
  const { addCustomerResult, addCustomerError, name } =
    useGetCustomerDetailsManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!addCustomerResult && !addCustomerError) return;

    if (addCustomerResult === "fulfilled") {
      fireSwal("success", `${name} added!`, "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetCustomerDetailsManagementState());
            hamburgerHandlerNavigate(allCustomersRoute);
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
    addCustomerResult,
    addCustomerError,
    dispatch,
    hamburgerHandlerNavigate,
    name,
  ]);
};

export default useAddCustomerResultSwalUseEffect;
