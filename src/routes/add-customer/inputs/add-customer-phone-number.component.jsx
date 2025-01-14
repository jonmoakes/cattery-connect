import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerPhoneNumber = ({ handleAddCustomerDetailsChange }) => {
  const { phoneNumber } = useGetAddCustomerDetailsSelectors();

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
        onChange={handleAddCustomerDetailsChange}
      />
    </>
  );
};

export default AddCustomerPhoneNumber;
