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
import { addCustomerRoute, editCustomerRoute } from "../../../strings/routes";
import { isValidEmail } from "../../../functions/validate-email";
import { formFieldsHaveNotChanged } from "../../../functions/form-fields-have-not-changed";
import { formDetailsAreTheSameMessage } from "../../../strings/info";
import {
  confirmAddDataMessage,
  confirmEditDataMessage,
} from "../../../strings/confirms";

const useSubmitCustomer = () => {
  const {
    name,
    email,
    phoneNumber,
    customerDetails,
    catteryId: currentCatteryId,
    customerDetailsForFormComparison,
  } = useGetCustomerDetailsManagementSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const handleSubmission = () => {
    const title =
      path === addCustomerRoute
        ? confirmAddDataMessage(name)
        : confirmEditDataMessage(name);

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
      confirmSwal(title, "", "yes", "", confirmResult, null);
    }
  };

  const submitCustomer = (e) => {
    e.preventDefault();

    if (path === editCustomerRoute) {
      if (
        formFieldsHaveNotChanged(
          customerDetails,
          customerDetailsForFormComparison
        )
      ) {
        fireSwal(
          "info",
          formDetailsAreTheSameMessage(name),
          "",
          0,
          "",
          false,
          "",
          false
        );
        return;
      }
    }

    handleSubmission();
  };
  return { submitCustomer };
};

export default useSubmitCustomer;
