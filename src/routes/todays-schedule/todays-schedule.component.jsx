import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useGetTodaysScheduleSelectors from "../../hooks/selectors/use-get-todays-schedule-selectors";
import {
  getTodaysCatsAsync,
  getTodaysScheduleAsync,
} from "../../store/todays-schedule/todays-schedule.thunks";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TodaysSchedule = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();
  const { todaysScheduleData } = useGetTodaysScheduleSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    dispatch(getTodaysScheduleAsync({ catteryId })).then((resultAction) => {
      if (getTodaysScheduleAsync.fulfilled.match(resultAction)) {
        dispatch(getTodaysCatsAsync({ todaysScheduleData }));
      }
    });
  }, [currentUser, dispatch, catteryId, todaysScheduleData]);

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">todays schedule</CustomBalancedText>
      </ParentDiv>
    </Container>
  );
};

export default TodaysSchedule;
