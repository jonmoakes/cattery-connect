import { format } from "date-fns";

import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";
import useDailyScheduleTableVariables from "./daily-schedule-hooks/use-daily-schedule-table-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

const DailyScheduleTitle = () => {
  const { dailyBookingsDataResult, dateForShownData, dailyBookingsDataError } =
    useGetDailyScheduleSelectors();
  const { data } = useDailyScheduleTableVariables();

  return (
    <>
      {dailyBookingsDataError ? (
        <CustomBalancedText type="h1">daily schedule</CustomBalancedText>
      ) : dailyBookingsDataResult === "fulfilled" && !data.length ? null : (
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
