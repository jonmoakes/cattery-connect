import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useChooseDateAndFetchData from "./daily-schedule-hooks/use-choose-date-and-fetch-data";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import CustomSpan from "../../components/custom-span/custom-span.component";
import { StyledDatePicker } from "../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";
import useDailyScheduleTableVariables from "./daily-schedule-hooks/use-daily-schedule-table-variables";

const DailyScheduleDateInput = () => {
  const { dailyBookingsDataError } = useGetDailyScheduleSelectors();
  const { data } = useDailyScheduleTableVariables();
  const { chosenDate, chooseDateAndFetchData } = useChooseDateAndFetchData();

  return (
    <>
      {dailyBookingsDataError ? null : (
        <Form
          className={data.length ? "no-margin-top-small-margin-bottom" : ""}
        >
          <DateInputContainer className="no-margin">
            <StyledDatePickerWrapper>
              <CustomBalancedText type="optionsLabel">
                <CustomSpan>choose another date</CustomSpan>
              </CustomBalancedText>

              <StyledDatePicker
                selected={chosenDate ? format(chosenDate, "yyyy-MM-dd") : null}
                onChange={(date) => chooseDateAndFetchData(date)}
                dateFormat="EEE d MMM yyyy"
                minDate={new Date()}
                onKeyDown={(e) => e.preventDefault()}
                placeholderText="tap here to choose"
              />
            </StyledDatePickerWrapper>
          </DateInputContainer>
        </Form>
      )}
    </>
  );
};

export default DailyScheduleDateInput;
