import { format } from "date-fns";
import useHandleCheckInAndOutDatesChange from "./check-in-and-out-date-input-hooks/use-handle-check-in-and-out-dates-change";

import { StyledDatePicker } from "../../../../../styles/date-picker/date-picker.styles";
import { Label } from "../../../../../styles/form/form.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../../../../styles/div/div.styles";
import { RedSpan } from "../../../../../styles/span/span.styles";
import "react-datepicker/dist/react-datepicker.css";

const CheckInAndOutDateInput = ({ dateType, label, selectedDate }) => {
  const { handleCheckInAndOutDatesChange } =
    useHandleCheckInAndOutDatesChange();

  return (
    <DateInputContainer>
      <StyledDatePickerWrapper>
        <Label className="date-picker">
          <RedSpan>* </RedSpan>
          {label}
        </Label>
        <StyledDatePicker
          selected={
            selectedDate ? format(selectedDate, "EEE d MMM yyyy") : new Date()
          }
          onChange={(date) => handleCheckInAndOutDatesChange(dateType, date)}
          dateFormat="EEE d MMM yyyy"
          minDate={new Date()}
          onKeyDown={(e) => e.preventDefault()}
        />
      </StyledDatePickerWrapper>
    </DateInputContainer>
  );
};

export default CheckInAndOutDateInput;
