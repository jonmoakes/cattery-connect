import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";
import useChooseDateAndFetchData from "./daily-schedule-hooks/use-choose-date-and-fetch-data";

import { StyledDatePicker } from "../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../styles/div/div.styles";

const DailyScheduleDateInput = () => {
  const { dailyBookingsDataError } = useGetDailyScheduleSelectors();
  const { chosenDate, chooseDateAndFetchData } = useChooseDateAndFetchData();

  return (
    <>
      {dailyBookingsDataError ? null : (
        <DateInputContainer className="neg-margin">
          <StyledDatePickerWrapper>
            <StyledDatePicker
              value=""
              selected={chosenDate ? format(chosenDate, "yyyy-MM-dd") : null}
              onChange={(date) => chooseDateAndFetchData(date)}
              dateFormat="EEE d MMM yyyy"
              minDate={new Date()}
              onKeyDown={(e) => e.preventDefault()}
              placeholderText="tap to choose date"
              onFocus={(e) => (e.target.blur(), (e.target.readOnly = true))}
            />
          </StyledDatePickerWrapper>
        </DateInputContainer>
      )}
    </>
  );
};

export default DailyScheduleDateInput;
