import { useDispatch } from "react-redux";

import {
  setCustomerDetailForFormComparison,
  setCustomerDetails,
} from "../../../store/customer-details-management/customer-details-management.slice";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { editCustomerRoute } from "../../../strings/routes";
import { confirmDeleteMessage } from "../../../strings/confirms";

import { getFirstNameFromString } from "../../../functions/get-first-name-from-string";
import {
  deleteCustomerAsync,
  deleteCustomersCatsAsync,
} from "../../../store/customer-details-management/customer-details-management.thunks";

const useAllCustomersFunctions = (chosenEntry) => {
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmSwal } = useConfirmSwal();

  const passCustomerDetailsAndGoToEditCustomer = () => {
    dispatch(setCustomerDetails(chosenEntry));
    dispatch(setCustomerDetailForFormComparison(chosenEntry));
    hamburgerHandlerNavigate(editCustomerRoute);
  };

  const deleteCustomer = () => {
    const { name, customerId, $id } = chosenEntry ?? {};

    const confirmResult = () => {
      dispatch(deleteCustomersCatsAsync({ customerId })).then(
        (resultAction) => {
          if (deleteCustomersCatsAsync.fulfilled.match(resultAction)) {
            dispatch(deleteCustomerAsync({ $id }));
          }
        }
      );
    };

    const type = "customer";
    confirmSwal(
      confirmDeleteMessage(name, type),
      "",
      `yes, delete ${getFirstNameFromString(name)}`,
      "don't delete",
      confirmResult,
      null
    );
  };

  return { passCustomerDetailsAndGoToEditCustomer, deleteCustomer };
};

export default useAllCustomersFunctions;
