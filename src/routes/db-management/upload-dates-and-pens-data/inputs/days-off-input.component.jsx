import { format } from "date-fns";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import useHandleDatesAndPensChange from "../upload-dates-hooks/use-handle-data-and-pens-change";
import useConfirmAddDayOff from "../upload-dates-hooks/use-confirm-add-day-off";

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../../components/custom-span/custom-span.component";
import DisplayCurrentlyChosenDaysOff from "./display-currently-chosen-days-off.component";

import { MinimalButton } from "../../../../styles/button/button.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../../../styles/div/div.styles";
import { StyledDatePicker } from "../../../../styles/date-picker/date-picker.styles";

const DaysOffInput = () => {
  const { datesIncludeDaysClosed, dateClosedToAdd } =
    useGetUploadDatesAndPensDataSelectors();
  const { handleDayOffToAddChange } = useHandleDatesAndPensChange();
  const { confirmAddDayOff } = useConfirmAddDayOff();

  return (
    <>
      {datesIncludeDaysClosed === "yes" ? (
        <>
          <DateInputContainer>
            <StyledDatePickerWrapper>
              <CustomBalancedText type="optionsLabel">
                choose an{" "}
                <CustomSpan className="yellow">unavailable day</CustomSpan>
              </CustomBalancedText>

              <StyledDatePicker
                selected={
                  dateClosedToAdd
                    ? format(dateClosedToAdd, "EEE d MMM yyyy")
                    : null
                }
                onChange={(date) => handleDayOffToAddChange(date)}
                dateFormat="EEE d MMM yyyy"
                minDate={new Date()}
                onKeyDown={(e) => e.preventDefault()}
                placeholderText="tap here to choose"
                onFocus={(e) => (e.target.blur(), (e.target.readOnly = true))}
              />
            </StyledDatePickerWrapper>
          </DateInputContainer>

          {dateClosedToAdd ? (
            <>
              <MinimalButton
                type="button"
                className="margin animate"
                onClick={confirmAddDayOff}
              >
                Add day off
              </MinimalButton>
            </>
          ) : null}
          <DisplayCurrentlyChosenDaysOff />
        </>
      ) : null}
    </>
  );
};

export default DaysOffInput;
