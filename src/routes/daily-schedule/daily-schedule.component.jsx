import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";

import useGetTodaysDataThunkUseEffect from "./daily-schedule-hooks/use-effects/use-get-todays-data-thunk-use-effect";

import DailyScheduleLoader from "./daily-schedule-loader.component";
import DailyScheduleTitle from "./daily-schedule-title.component";
import DailyScheduleDateInput from "./daily-schedule-date-input.component";
import NextAndPreviousDatesButtons from "../../components/next-and-previous-dates-buttons/next-and-previous-dates-buttons.component";
import DailyScheduleTable from "./daily-schedule-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const DailySchedule = () => {
  const { dailyBookingsDataError } = useGetDailyScheduleSelectors();

  useGetTodaysDataThunkUseEffect();

  return (
    <Container>
      <DailyScheduleLoader />
      <ParentDiv>
        <DailyScheduleTitle />
        <DailyScheduleDateInput />
        {dailyBookingsDataError ? null : <NextAndPreviousDatesButtons />}
      </ParentDiv>

      <DailyScheduleTable />
    </Container>
  );
};

export default DailySchedule;
