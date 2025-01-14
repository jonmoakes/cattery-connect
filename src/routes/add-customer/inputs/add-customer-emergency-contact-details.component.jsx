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
        placeholder="please provide a name, phone number and address"
        required
      />
    </>
  );
};

export default AddCustomerEmergencyContactDetails;
