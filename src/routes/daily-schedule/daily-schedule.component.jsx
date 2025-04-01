import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";

import useGetTodaysDataThunkUseEffect from "./daily-schedule-hooks/use-effects/use-get-todays-data-thunk-use-effect";

import Metadata from "../../components/metadata/metadata.component";
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
      <Metadata
        title="Cattery Connect - Daily Schedule"
        description="View and manage your cattery's daily schedule. Track check in / out details, cat information and other important tasks for the day."
      />

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
