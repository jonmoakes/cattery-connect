import { useLocation } from "react-router-dom";

import useHandlePenDataDateChange from "./use-handle-pen-date-data-change";
import useHandleDailyScheduleDateChange from "./use-handle-daily-schedule-date-change";

import { penDataRoute, dailyScheduleRoute } from "../../../strings/routes";

const useGetNextOrPreviousDaysData = () => {
  const location = useLocation();
  const path = location.pathname;

  const { handlePenDataDateChange } = useHandlePenDataDateChange();
  const { handleDailyScheduleDateChange } = useHandleDailyScheduleDateChange();

  const getNextOrPreviousDaysData = (direction) => {
    if (path === penDataRoute) {
      handlePenDataDateChange(direction);
    } else if (path === dailyScheduleRoute) {
      handleDailyScheduleDateChange(direction);
    }
  };

  return { getNextOrPreviousDaysData };
};

export default useGetNextOrPreviousDaysData;
