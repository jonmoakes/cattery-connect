import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import CustomSpan from "../../custom-span/custom-span.component";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";

const CustomerEmergencyContactDetailsInput = ({
  handleCustomerDetailsChange,
}) => {
  const { emergencyContactDetails } =
    useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <Label>
        <CustomSpan className="red">* </CustomSpan>
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
07512345678 ( no spaces for phone number please. )`}
        required
      />
    </>
  );
};

export default CustomerEmergencyContactDetailsInput;
