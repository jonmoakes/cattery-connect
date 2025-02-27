import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useGetTodaysScheduleSelectors from "../../hooks/selectors/use-get-todays-schedule-selectors";
import { getTodaysBookingsRequiredDataAsync } from "../../store/todays-schedule/todays-schedule.thunks";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TodaysSchedule = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();
  const {
    todaysBookingsDataResult,
    todaysBookingsDataError,
    todaysBookingsData,
  } = useGetTodaysScheduleSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || todaysBookingsDataResult) return;

    dispatch(getTodaysBookingsRequiredDataAsync({ catteryId }));
  }, [currentUser, catteryId, todaysBookingsDataResult, dispatch]);

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">todays schedule</CustomBalancedText>
      </ParentDiv>

      {todaysBookingsDataError ? (
        <ShowFetchErrors />
      ) : todaysBookingsData && !todaysBookingsData.length ? (
        <ParentDiv>
          <CustomBalancedText>no cats are in today</CustomBalancedText>
        </ParentDiv>
      ) : null}
    </Container>
  );
};

export default TodaysSchedule;
