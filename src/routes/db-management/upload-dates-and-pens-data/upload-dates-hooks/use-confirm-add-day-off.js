import { useDispatch } from "react-redux";
import { format } from "date-fns";
import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import {
  setDateClosedToAdd,
  setDatesClosedArray,
} from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";

const useConfirmAddDayOff = () => {
  const { dateClosedToAdd, datesClosedArray } =
    useGetUploadDatesAndPensDataSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(setDatesClosedArray([...datesClosedArray, dateClosedToAdd]));
    dispatch(setDateClosedToAdd(""));
  };

  const confirmAddDayOff = () => {
    if (dateClosedToAdd && datesClosedArray.includes(dateClosedToAdd)) {
      fireSwal(
        "error",
        "this date is already in the array...",
        "",
        0,
        "",
        false,
        "",
        false
      );
    } else {
      const formattedDate = dateClosedToAdd
        ? format(dateClosedToAdd, "dd MMMM yyyy,")
        : dateClosedToAdd;
      confirmSwal(
        `add ${formattedDate} to the dates closed array?`,
        "",
        `yes, add it`,
        "",
        confirmResult,
        null
      );
    }
  };

  return { confirmAddDayOff };
};

export default useConfirmAddDayOff;
