import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const CustomerAddressInput = ({ handleCustomerDetailsChange }) => {
  const { address } = useGetCustomerDetailsManagementSelectors();

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
        onChange={handleCustomerDetailsChange}
        placeholder={`Separate into lines for easier viewing in the table - ie:

56 Maple Lane
Faketown
FA1 9XY`}
        required
      />
    </>
  );
};

export default CustomerAddressInput;
