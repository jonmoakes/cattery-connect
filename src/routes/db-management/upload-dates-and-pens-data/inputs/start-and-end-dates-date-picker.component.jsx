import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import CustomSpan from "../../../../components/custom-span/custom-span.component";
import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";

import { StyledDatePicker } from "../../../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../../../styles/div/div.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const StartAndEndDatesDatePicker = ({
  dateType,
  selectedDate,
  handleDatesChange,
}) => {
  const highlightedText = dateType === "startDate" ? "start date" : "end date";

  return (
    <>
      <BlackHr />
      <DateInputContainer>
        <StyledDatePickerWrapper>
          <CustomBalancedText type="optionsLabel">
            {`choose a `}
            {highlightedText && (
              <CustomSpan className="yellow">{highlightedText}</CustomSpan>
            )}
          </CustomBalancedText>

          <StyledDatePicker
            selected={
              selectedDate ? format(selectedDate, "EEE d MMM yyyy") : null
            }
            onChange={(date) => handleDatesChange(dateType, date)}
            dateFormat="EEE d MMM yyyy"
            minDate={new Date()}
            onKeyDown={(e) => e.preventDefault()}
            placeholderText="tap here to choose"
          />
        </StyledDatePickerWrapper>
      </DateInputContainer>
    </>
  );
};

export default StartAndEndDatesDatePicker;
