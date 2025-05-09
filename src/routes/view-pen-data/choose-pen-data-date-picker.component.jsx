import { useState } from "react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";
import useChooseDateAndFetchPenData from "./view-pen-data-hooks/use-choose-date-and-fetch-pen-data";

import ChosenDateWhenNoData from "./chosen-date-when-no-data.component";
import { StyledDatePicker } from "../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../styles/div/div.styles";

const ChoosePenDataDatePicker = () => {
  const { returnedChosenDate } = useGetViewPenDataSelectors();
  const { chooseDateAndFetchPenData } = useChooseDateAndFetchPenData();
  const [date, setDate] = useState("");

  return (
    <>
      <DateInputContainer>
        <StyledDatePickerWrapper>
          <StyledDatePicker
            selected={
              returnedChosenDate
                ? format(returnedChosenDate, "yyyy-MM-dd")
                : null
            }
            onChange={(chosenDate) => {
              chooseDateAndFetchPenData(chosenDate);
              setDate(chosenDate);
            }}
            dateFormat="EEE d MMM yyyy"
            minDate={new Date()}
            onKeyDown={(e) => e.preventDefault()}
            placeholderText="tap to choose date"
            onFocus={(e) => (e.target.blur(), (e.target.readOnly = true))}
          />
        </StyledDatePickerWrapper>
      </DateInputContainer>
      <ChosenDateWhenNoData {...{ date }} />
    </>
  );
};

export default ChoosePenDataDatePicker;
