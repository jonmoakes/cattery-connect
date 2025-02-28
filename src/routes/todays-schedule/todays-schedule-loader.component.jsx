import useGetTodaysScheduleSelectors from "../../hooks/selectors/use-get-todays-schedule-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

const TodaysScheduleLoader = () => {
  const { todaysScheduleIsLoading } = useGetTodaysScheduleSelectors();

  return (
    <>
      {todaysScheduleIsLoading ? (
        <SkeletonBox loadingText="fetching todays data..." />
      ) : null}
    </>
  );
};

export default TodaysScheduleLoader;
