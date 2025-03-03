import useGetTodaysDataThunkUseEffect from "./daily-schedule-hooks/use-get-todays-data-thunk-use-effect";

import DailyScheduleLoader from "./daily-schedule-loader.component";
import DailyScheduleTitle from "./daily-schedule-title.component";
import DailyScheduleDateInput from "./daily-schedule-date-input.component";
import DailyScheduleTable from "./daily-schedule-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const DailySchedule = () => {
  useGetTodaysDataThunkUseEffect();

  return (
    <Container>
      <DailyScheduleLoader />
      <ParentDiv>
        <DailyScheduleTitle />
        <DailyScheduleDateInput />
      </ParentDiv>

      <DailyScheduleTable />
    </Container>
  );
};

export default DailySchedule;
