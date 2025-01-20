import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import {
  addCustomerAsync,
  editCustomerAsync,
} from "../../../store/customer-details-management/customer-details-management.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  enterPhoneNumberMessage,
  phoneLengthErrorMessage,
} from "../../../strings/errors";
import { addCustomerRoute } from "../../../strings/routes";
import { isValidEmail } from "../../../functions/validate-email";

const useSubmitCustomer = () => {
  const {
    email,
    phoneNumber,
    customerDetails,
    catteryId: currentCatteryId,
  } = useGetCustomerDetailsManagementSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const submitCustomer = (e) => {
    e.preventDefault();

    const confirmResult = () => {
      if (currentCatteryId === undefined) {
        // creating a customer
        dispatch(addCustomerAsync({ customerDetails, catteryId }));
      } else {
        //updating a customer
        dispatch(editCustomerAsync({ customerDetails }));
      }
    };

    if (email && !isValidEmail(email)) {
      fireSwal("error", "invalid email", "", 0, "", false, "", false);
    } else if (!phoneNumber) {
      fireSwal("error", enterPhoneNumberMessage, "", 0, "", false, "", false);
    } else if (phoneNumber && phoneNumber.length !== 11) {
      fireSwal("error", phoneLengthErrorMessage, "", 0, "", false, "", false);
    } else {
      confirmSwal(
        path === addCustomerRoute
          ? "add this customer?"
          : "update this customer?",
        "",
        "yes",
        "",
        confirmResult,
        null
      );
    }
  };

  return { submitCustomer };
};

export default useSubmitCustomer;
