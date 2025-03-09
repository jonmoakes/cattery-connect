import { useDispatch } from "react-redux";

import useGetDailyScheduleSelectors from "../../../hooks/selectors/use-get-daily-schedule-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { getDailyBookingsDataAsync } from "../../../store/daily-schedule/daily-schedule.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";

const useHandleDailyScheduleDateChange = () => {
  const { dateForShownData, passedChosenDate } = useGetDailyScheduleSelectors();
  const { catteryId } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  // on daily schedule route, if there is data for that day, dateForShownData is returned
  // if there is no data ( ie no bookings on that day ), we return the date passed to the thunk request
  // (passedChosenDate ) so that it can be used as the basis for the date in order to +1 or -1 the date
  // if this wasn't returned, we wouldn't have a date to use as the data that came back would be empty.
  const handleDailyScheduleDateChange = (direction) => {
    let dateForShownDataAsDateObject = dateForShownData
      ? new Date(dateForShownData)
      : passedChosenDate
      ? passedChosenDate
      : new Date();

    if (direction === "next") {
      dateForShownDataAsDateObject.setDate(
        dateForShownDataAsDateObject.getDate() + 1
      );
    } else if (direction === "previous") {
      const today = new Date();
      if (dateForShownDataAsDateObject > today) {
        dateForShownDataAsDateObject.setDate(
          dateForShownDataAsDateObject.getDate() - 1
        );
      } else {
        fireSwal(
          "info",
          "sorry, data is not available for past dates.",
          "",
          0,
          "",
          false,
          "",
          false
        );
        return;
      }
    }

    dispatch(
      getDailyBookingsDataAsync({
        catteryId,
        chosenDate: dateForShownDataAsDateObject,
      })
    );
  };

  return { handleDailyScheduleDateChange };
};

export default useHandleDailyScheduleDateChange;
