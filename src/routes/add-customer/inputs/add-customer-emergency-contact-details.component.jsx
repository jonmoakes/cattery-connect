import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerEmergencyContactDetails = ({
  handleAddCustomerDetailsChange,
}) => {
  const { emergencyContactDetails } = useGetAddCustomerDetailsSelectors();

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
        onChange={handleAddCustomerDetailsChange}
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

export default AddCustomerEmergencyContactDetails;
