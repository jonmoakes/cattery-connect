import { format } from "date-fns";

import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";

const useGetMonthForUi = () => {
  const { month, year } = useGetDeleteDatesSelectors();

  const paddedMonth = month && month.toString().padStart(2, "0");
  const date = new Date(`${year}-${paddedMonth}-01`);
  const monthForUi = format(date, "MMMM");

  return { monthForUi };
};

export default useGetMonthForUi;
