import { useDispatch } from "react-redux";

import useGetViewPenDataSelectors from "../../../hooks/selectors/use-get-view-pen-data-selectors";

import { fetchChosenDaysPenDataAsync } from "../../../store/view-pen-data/view-pen-data.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";

const useGetNextOrPreviousDaysPenData = () => {
  const { returnedChosenDate } = useGetViewPenDataSelectors();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const getNextOrPreviousDaysPenData = (direction) => {
    const returnedChosenDateAsDateObject = new Date(returnedChosenDate);

    if (direction === "next") {
      returnedChosenDateAsDateObject.setDate(
        returnedChosenDateAsDateObject.getDate() + 1
      );
    } else if (direction === "previous") {
      const today = new Date();
      if (returnedChosenDateAsDateObject > today) {
        returnedChosenDateAsDateObject.setDate(
          returnedChosenDateAsDateObject.getDate() - 1
        );
      } else {
        fireSwal(
          "info",
          "sorry, pen data is not available for past dates.",
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
      fetchChosenDaysPenDataAsync({
        chosenDate: returnedChosenDateAsDateObject,
      })
    );
  };

  return { getNextOrPreviousDaysPenData };
};

export default useGetNextOrPreviousDaysPenData;
