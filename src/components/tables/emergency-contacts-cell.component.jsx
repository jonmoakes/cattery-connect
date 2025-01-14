import { EmergencyDetailsDiv } from "../../styles/div/div.styles";
import { EmergencyDetailsSpan } from "../../styles/span/span.styles";
import PhoneNumberCell from "./phone-number-cell.component";
import useRemovePhoneNumberFromString from "./table-hooks/use-remove-phone-number-from-string";

const EmergencyContactsCell = ({ value }) => {
  const { phoneNumber, updatedString } = useRemovePhoneNumberFromString(value);

  return (
    <>
      {value && phoneNumber ? (
        <EmergencyDetailsDiv>
          <>
            <PhoneNumberCell value={phoneNumber} />
            <EmergencyDetailsSpan>{updatedString}</EmergencyDetailsSpan>
          </>
        </EmergencyDetailsDiv>
      ) : (
        <span>{value}</span>
      )}
    </>
  );
};

export default EmergencyContactsCell;
