import { useDispatch } from "react-redux";

import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { addCustomerToDbAsync } from "../../../store/add-customer/add-customer.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  enterPhoneNumberMessage,
  phoneLengthErrorMessage,
} from "../../../strings/errors";

import { isValidEmail } from "../../../functions/validate-email";

const useSubmitAddCustomer = () => {
  const { email, phoneNumber, addCustomerDetails } =
    useGetAddCustomerDetailsSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const submitAddCustomer = (e) => {
    e.preventDefault();

    if (email && !isValidEmail(email)) {
      fireSwal("error", "invalid email", "", 0, "", false, "", false);
    } else if (!phoneNumber) {
      fireSwal("error", enterPhoneNumberMessage, "", 0, "", false, "", false);
    } else if (phoneNumber && phoneNumber.length !== 11) {
      fireSwal("error", phoneLengthErrorMessage, "", 0, "", false, "", false);
    } else {
      confirmSwal(
        "add this customer?",
        "",
        "yes",
        "",
        () => dispatch(addCustomerToDbAsync({ addCustomerDetails, catteryId })),
        null
      );
    }
  };

  return { submitAddCustomer };
};

export default useSubmitAddCustomer;
