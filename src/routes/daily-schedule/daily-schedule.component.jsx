import useGetTodaysDataThunkUseEffect from "./daily-schedule-hooks/use-get-todays-data-thunk-use-effect";

import DailyScheduleLoader from "./daily-schedule-loader.component";
import DailyScheduleTitle from "./daily-schedule-title.component";
import DailyScheduleDateInput from "./daily-schedule-date-input.component";
import NextAndPreviousDatesButtons from "../../components/next-and-previous-dates-buttons/next-and-previous-dates-buttons.component";
import DailyScheduleTable from "./daily-schedule-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { Form } from "../../styles/form/form.styles";

const DailySchedule = () => {
  useGetTodaysDataThunkUseEffect();

  return (
    <Container>
      <DailyScheduleLoader />
      <ParentDiv>
        <DailyScheduleTitle />

        <Form className={"no-margin-top-small-margin-bottom"}>
          <DailyScheduleDateInput />
          <NextAndPreviousDatesButtons />
        </Form>
      </ParentDiv>

      <DailyScheduleTable />
    </Container>
  );
};

export default DailySchedule;
