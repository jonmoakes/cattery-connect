import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const CustomerEmergencyContactDetailsInput = ({
  handleCustomerDetailsChange,
}) => {
  const { emergencyContactDetails } =
    useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        emergency Contact Details:
      </Label>

      <StyledTextArea
        type="text"
        name="emergencyContactDetails"
        value={emergencyContactDetails || ""}
        onChange={handleCustomerDetailsChange}
        placeholder={`Please provide a name, relationship & phone number.
Separate into lines for easier viewing in the table - ie:

jane bloggs
mother
07512345678`}
        required
      />
    </>
  );
};

export default CustomerEmergencyContactDetailsInput;
