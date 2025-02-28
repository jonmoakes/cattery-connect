import useGetTodaysDataThunkUseEffect from "./todays-schedule-hooks/use-get-todays-data-thunk-use-effect";

import TodaysScheduleLoader from "./todays-schedule-loader.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import TodaysScheduleTable from "./todays-schedule-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TodaysSchedule = () => {
  useGetTodaysDataThunkUseEffect();

  return (
    <Container>
      <TodaysScheduleLoader />
      <ParentDiv>
        <CustomBalancedText type="h1">todays schedule</CustomBalancedText>
      </ParentDiv>

      <TodaysScheduleTable />
    </Container>
  );
};

export default TodaysSchedule;
