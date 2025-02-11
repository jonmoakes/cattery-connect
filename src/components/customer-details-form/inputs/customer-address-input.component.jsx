import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import CustomSpan from "../../custom-span/custom-span.component";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";

const CustomerAddressInput = ({ handleCustomerDetailsChange }) => {
  const { address } = useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <Label>
        <CustomSpan className="red">* </CustomSpan>
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
