import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerAddress = ({ handleAddCustomerDetailsChange }) => {
  const { address } = useGetAddCustomerDetailsSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        customer address:
      </Label>

      <StyledTextArea
        type="text"
        name="address"
        value={address || ""}
        onChange={handleAddCustomerDetailsChange}
        placeholder={`Separate into lines for easier viewing in the table - ie:

56 Maple Lane
Faketown
FA1 9XY`}
        required
      />
    </>
  );
};

export default AddCustomerAddress;
