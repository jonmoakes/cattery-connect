import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useGetViewPenDataSelectors from "../../hooks/selectors/use-get-view-pen-data-selectors";
import useChooseDateAndFetchPenData from "./view-pen-data-hooks/use-choose-date-and-fetch-pen-data";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { StyledDatePicker } from "../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../styles/div/div.styles";

const ChoosePenDataDatePicker = () => {
  const { returnedChosenDate } = useGetViewPenDataSelectors();
  const { chooseDateAndFetchPenData } = useChooseDateAndFetchPenData();

  return (
    <DateInputContainer className="no-margin-top">
      <StyledDatePickerWrapper>
        <CustomBalancedText type="optionsLabel">
          <CustomSpan className="yellow">choose a date</CustomSpan>
        </CustomBalancedText>

        <StyledDatePicker
          selected={
            returnedChosenDate ? format(returnedChosenDate, "yyyy-MM-dd") : null
          }
          onChange={(chosenDate, e) => {
            chooseDateAndFetchPenData(chosenDate);
            e?.target?.blur();
          }}
          dateFormat="EEE d MMM yyyy"
          minDate={new Date()}
          onKeyDown={(e) => e.preventDefault()}
          placeholderText="tap here to choose"
          onFocus={(e) => e.target.blur()}
        />
      </StyledDatePickerWrapper>
    </DateInputContainer>
  );
};

export default ChoosePenDataDatePicker;
