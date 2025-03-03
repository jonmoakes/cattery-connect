import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

const DailyScheduleLoader = () => {
  const { dailyScheduleIsLoading } = useGetDailyScheduleSelectors();

  return (
    <>
      {dailyScheduleIsLoading ? (
        <SkeletonBox loadingText="fetching data..." />
      ) : null}
    </>
  );
};

export default DailyScheduleLoader;
