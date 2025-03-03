import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import CustomSpan from "../../custom-span/custom-span.component";

import { StyledInput, Label } from "../../../styles/form/form.styles";

const CustomerPhoneNumberInput = ({ handleCustomerDetailsChange }) => {
  const { phoneNumber } = useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <Label>
        <CustomSpan className="red">* </CustomSpan>
        phone number:
      </Label>

      <StyledInput
        type="tel"
        name="phoneNumber"
        value={phoneNumber || ""}
        onChange={handleCustomerDetailsChange}
        placeholder="no spaces please"
      />
    </>
  );
};

export default CustomerPhoneNumberInput;
