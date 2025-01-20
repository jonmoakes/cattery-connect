import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const CustomerPhoneNumberInput = ({ handleCustomerDetailsChange }) => {
  const { phoneNumber } = useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        phone number:
      </Label>

      <StyledInput
        type="tel"
        name="phoneNumber"
        value={phoneNumber || ""}
        onChange={handleCustomerDetailsChange}
      />
    </>
  );
};

export default CustomerPhoneNumberInput;
