// import { format } from "date-fns";
// import "react-datepicker/dist/react-datepicker.css";

// import useChooseDateAndFetchData from "./daily-schedule-hooks/use-choose-date-and-fetch-data";

// import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

// import CustomSpan from "../../components/custom-span/custom-span.component";
// import { StyledDatePicker } from "../../styles/date-picker/date-picker.styles";
// import {
//   DateInputContainer,
//   StyledDatePickerWrapper,
// } from "../../styles/div/div.styles";
// import { Form } from "../../styles/form/form.styles";
// import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";
// import useDailyScheduleTableVariables from "./daily-schedule-hooks/use-daily-schedule-table-variables";

// const DailyScheduleDateInput = () => {
//   const { dailyBookingsDataError } = useGetDailyScheduleSelectors();
//   const { data } = useDailyScheduleTableVariables();
//   const { chosenDate, chooseDateAndFetchData } = useChooseDateAndFetchData();

//   return (
//     <>
//       {dailyBookingsDataError ? null : (
//         <Form
//           className={data.length ? "no-margin-top-small-margin-bottom" : ""}
//         >
//           <DateInputContainer className="no-margin">
//             <StyledDatePickerWrapper>
//               <CustomBalancedText type="optionsLabel">
//                 <CustomSpan>choose another date</CustomSpan>
//               </CustomBalancedText>

//               <StyledDatePicker
//                 selected={chosenDate ? format(chosenDate, "yyyy-MM-dd") : null}
//                 onChange={(date) => chooseDateAndFetchData(date)}
//                 dateFormat="EEE d MMM yyyy"
//                 minDate={new Date()}
//                 onKeyDown={(e) => e.preventDefault()}
//                 placeholderText="tap here to choose"
//               />
//             </StyledDatePickerWrapper>
//           </DateInputContainer>
//         </Form>
//       )}
//     </>
//   );
// };

// export default DailyScheduleDateInput;

import { useState, useRef, useEffect } from "react"; // Added useState, useRef, useEffect
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

  // Add state to control datepicker open/closed
  const [isOpen, setIsOpen] = useState(false);
  // Add ref to detect outside touches
  const datePickerRef = useRef(null);

  // Handle touch outside to close datepicker on mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      {dailyBookingsDataError ? null : (
        <Form
          className={data.length ? "no-margin-top-small-margin-bottom" : ""}
        >
          <DateInputContainer className="no-margin">
            <StyledDatePickerWrapper ref={datePickerRef}>
              <CustomBalancedText type="optionsLabel">
                <CustomSpan>choose another date</CustomSpan>
              </CustomBalancedText>

              <StyledDatePicker
                selected={chosenDate} // Pass Date object directly
                onChange={(date) => chooseDateAndFetchData(date)}
                dateFormat="EEE d MMM yyyy"
                minDate={new Date()}
                onKeyDown={(e) => e.preventDefault()}
                placeholderText="tap here to choose"
                open={isOpen} // Control open state
                onCalendarOpen={() => setIsOpen(true)} // Open datepicker
                onSelect={() => setIsOpen(false)} // Close on selection
              />
            </StyledDatePickerWrapper>
          </DateInputContainer>
        </Form>
      )}
    </>
  );
};

export default DailyScheduleDateInput;
