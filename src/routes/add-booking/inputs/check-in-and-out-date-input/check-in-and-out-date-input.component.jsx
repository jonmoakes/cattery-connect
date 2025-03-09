import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useHandleCheckInAndOutDatesChange from "./check-in-and-out-date-input-hooks/use-handle-check-in-and-out-dates-change";

import CustomSpan from "../../../../components/custom-span/custom-span.component";
import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";

import { StyledDatePicker } from "../../../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../../../styles/div/div.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const CheckInAndOutDateInput = ({ dateType, condition, selectedDate }) => {
  const { handleCheckInAndOutDatesChange } =
    useHandleCheckInAndOutDatesChange();

  const highlightedText =
    dateType === "checkInDate" ? "check in date" : "check out date";

  return (
    <>
      {condition ? (
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
                onChange={(date) =>
                  handleCheckInAndOutDatesChange(dateType, date)
                }
                dateFormat="EEE d MMM yyyy"
                minDate={new Date()}
                onKeyDown={(e) => e.preventDefault()}
                placeholderText="tap here to choose"
                onFocus={(e) => (e.target.blur(), (e.target.readOnly = true))}
              />
            </StyledDatePickerWrapper>
          </DateInputContainer>
        </>
      ) : null}
    </>
  );
};

export default CheckInAndOutDateInput;
