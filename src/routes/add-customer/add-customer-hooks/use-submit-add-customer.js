import { useDispatch } from "react-redux";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";
import { addCustomerAsync } from "../../../store/customer/customer.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  enterPhoneNumberMessage,
  phoneLengthErrorMessage,
} from "../../../strings/errors";

import { isValidEmail } from "../../../functions/validate-email";

const useSubmitAddCustomer = () => {
  const { email, phoneNumber, customerDetails } =
    useGetCustomerDetailsSelectors();

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
        () => dispatch(addCustomerAsync({ customerDetails })),
        null
      );
    }
  };

  return { submitAddCustomer };
};

export default useSubmitAddCustomer;
