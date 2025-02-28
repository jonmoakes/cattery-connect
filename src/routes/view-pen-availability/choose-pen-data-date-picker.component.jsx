import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import useGetViewPenAvailabilitySelectors from "../../hooks/selectors/use-get-view-pen-availability-selectors";
import useChooseDateAndFetchPenData from "./view-pen-availability-hooks/use-choose-date-and-fetch-pen-data";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { StyledDatePicker } from "../../styles/date-picker/date-picker.styles";
import {
  DateInputContainer,
  StyledDatePickerWrapper,
} from "../../styles/div/div.styles";

const ChoosePenDataDatePicker = () => {
  const { returnedChosenDate } = useGetViewPenAvailabilitySelectors();
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
          onChange={chooseDateAndFetchPenData}
          dateFormat="EEE d MMM yyyy"
          minDate={new Date()}
          onKeyDown={(e) => e.preventDefault()}
          placeholderText="tap here to choose"
        />
      </StyledDatePickerWrapper>
    </DateInputContainer>
  );
};

export default ChoosePenDataDatePicker;
