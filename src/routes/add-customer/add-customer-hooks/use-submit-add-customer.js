import { isValidEmail } from "../../../functions/validate-email";
import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  enterPhoneNumberMessage,
  phoneLengthErrorMessage,
} from "../../../strings/errors";

const useSubmitAddCustomer = () => {
  const { email, phoneNumber } = useGetCustomerDetailsSelectors();

  const { fireSwal } = useFireSwal();

  const submitAddCustomer = (e) => {
    e.preventDefault();

    if (email && !isValidEmail(email)) {
      fireSwal("error", "invalid email", "", 0, "", false, "", false);
    } else if (!phoneNumber) {
      fireSwal("error", enterPhoneNumberMessage, "", 0, "", false, "", false);
    } else if (phoneNumber && phoneNumber.length !== 11) {
      fireSwal("error", phoneLengthErrorMessage, "", 0, "", false, "", false);
    } else {
      alert("customer added!");
    }
  };

  return { submitAddCustomer };
};

export default useSubmitAddCustomer;
