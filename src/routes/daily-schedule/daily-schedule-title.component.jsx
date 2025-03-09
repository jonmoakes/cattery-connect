import { format } from "date-fns";

import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";
import useDailyScheduleTableVariables from "./daily-schedule-hooks/use-daily-schedule-table-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

const DailyScheduleTitle = () => {
  const { dateForShownData, dailyBookingsDataError, passedChosenDate } =
    useGetDailyScheduleSelectors();
  const { noDataFoundSoReturnedChosenDate } = useDailyScheduleTableVariables();

  return (
    <>
      {dailyBookingsDataError ? (
        <CustomBalancedText type="h1">daily schedule</CustomBalancedText>
      ) : noDataFoundSoReturnedChosenDate ? (
        <CustomBalancedText type="h1">
          schedule for
          <br />
          {format(passedChosenDate, "EEE dd MMMM yyyy")}
        </CustomBalancedText>
      ) : (
        <CustomBalancedText type="h1">
          schedule for
          <br />
          {dateForShownData ? format(dateForShownData, "EEE dd MMMM yyyy") : ""}
        </CustomBalancedText>
      )}
    </>
  );
};

export default DailyScheduleTitle;
