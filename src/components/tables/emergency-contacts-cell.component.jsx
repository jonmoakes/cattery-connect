import CustomSpan from "../custom-span/custom-span.component";
import PhoneNumberCell from "./phone-number-cell.component";

import { EmergencyDetailsDiv } from "../../styles/div/div.styles";

import useRemovePhoneNumberFromString from "./table-hooks/use-remove-phone-number-from-string";

const EmergencyContactsCell = ({ value }) => {
  const { phoneNumber, updatedString } = useRemovePhoneNumberFromString(value);

  return (
    <>
      {value && phoneNumber ? (
        <EmergencyDetailsDiv>
          <>
            <PhoneNumberCell value={phoneNumber} />
            <CustomSpan type="emergencyDetails">{updatedString}</CustomSpan>
          </>
        </EmergencyDetailsDiv>
      ) : (
        <span>{value}</span>
      )}
    </>
  );
};

export default EmergencyContactsCell;
