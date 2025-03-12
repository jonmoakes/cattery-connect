import useGetDailyScheduleSelectors from "../../hooks/selectors/use-get-daily-schedule-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

const DailyScheduleLoader = () => {
  const { dailyScheduleIsLoading, updateCheckInOutStatusIsLoading } =
    useGetDailyScheduleSelectors();

  return (
    <>
      {dailyScheduleIsLoading || updateCheckInOutStatusIsLoading ? (
        <SkeletonBox
          loadingText={
            dailyScheduleIsLoading
              ? "fetching data..."
              : updateCheckInOutStatusIsLoading && "updating status..."
          }
        />
      ) : null}
    </>
  );
};

export default DailyScheduleLoader;
