import Balancer from "react-wrap-balancer";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useHandleCheckInAndOutDatesChange from "./check-in-and-out-date-input-hooks/use-handle-check-in-and-out-dates-change";

import { StyledDatePicker } from "../../../../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { OptionsLabel } from "../../../../../styles/p/p.styles";
import { YellowSpan } from "../../../../../styles/span/span.styles";

const CheckInAndOutDateInput = ({
  condition,
  dateType,
  label,
  selectedDate,
}) => {
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
              <OptionsLabel className="white">
                <Balancer>
                  {label.split(highlightedText).map((part, index) => (
                    <>
                      {part}
                      {index === 0 && (
                        <YellowSpan>{highlightedText}</YellowSpan>
                      )}
                    </>
                  ))}
                </Balancer>
              </OptionsLabel>

              <StyledDatePicker
                selected={
                  selectedDate
                    ? format(selectedDate, "EEE d MMM yyyy")
                    : new Date()
                }
                onChange={(date) =>
                  handleCheckInAndOutDatesChange(dateType, date)
                }
                dateFormat="EEE d MMM yyyy"
                minDate={new Date()}
                onKeyDown={(e) => e.preventDefault()}
              />
            </StyledDatePickerWrapper>
          </DateInputContainer>
        </>
      ) : null}
    </>
  );
};

export default CheckInAndOutDateInput;
