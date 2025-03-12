import { isToday } from "date-fns";

import useGetDailyScheduleSelectors from "../../../../hooks/selectors/use-get-daily-schedule-selectors";
import { customYellow } from "../../../../styles/colours";

const useDailyStatusLogic = (row, value) => {
  const { dateForShownData } = useGetDailyScheduleSelectors();

  const { documentId, checkedInStatus, checkedOutStatus } = row.original;
  const isCheckingInToday = value.toLowerCase().includes("checking in");
  const isCheckingOutToday = value.toLowerCase().includes("checking out");
  const isShownDataToday = isToday(new Date(dateForShownData));

  const attributeToUpdate = isCheckingInToday
    ? "checkedInStatus"
    : "checkedOutStatus";

  const shouldShowUpdateStatusButton =
    (isShownDataToday && isCheckingInToday) ||
    (isShownDataToday && isCheckingOutToday);

  const checkingInBeforeButtonText =
    checkedInStatus === "checked in!"
      ? "checked in! 😸"
      : !checkedInStatus && "";

  const checkingOutBeforeButtonText =
    checkedOutStatus === "checked out!"
      ? "checked out! 😸"
      : !checkedOutStatus && "";

  const shouldShowBeforeButtonText =
    (isCheckingInToday && checkingInBeforeButtonText !== "") ||
    (isCheckingOutToday && checkingOutBeforeButtonText !== "");

  const beforeButtonText = isCheckingInToday
    ? checkingInBeforeButtonText
    : checkingOutBeforeButtonText;

  const buttonText =
    isCheckingInToday && !checkedInStatus
      ? "tap to check in"
      : isCheckingInToday && checkedInStatus === "checked in!"
      ? "undo"
      : isCheckingOutToday && !checkedOutStatus
      ? "tap to checkout"
      : isCheckingOutToday && checkedOutStatus === "checked out!"
      ? "undo"
      : "couldn't fetch status";

  const lowercasedS = `<span style="text-transform:lowercase;">(s)</span>`;

  const confirmUpdateStatusMessage =
    isCheckingInToday && !checkedInStatus
      ? `do you want to 
      <span style="color:${customYellow};">check the cat${lowercasedS} in</span>?`
      : isCheckingInToday && checkedInStatus
      ? `do you want to set the cat${lowercasedS} 
to be <span style="color:${customYellow};">NOT checked in</span>?`
      : isCheckingOutToday && !checkedOutStatus
      ? `do you want to 
      <span style="color:${customYellow};">check the cat${lowercasedS} out</span>?`
      : isCheckingOutToday && checkedOutStatus
      ? `do you want to set the cat${lowercasedS} 
to be <span style="color:${customYellow};">NOT checked out</span> ?`
      : "update status";

  return {
    documentId,
    attributeToUpdate,
    shouldShowUpdateStatusButton,
    shouldShowBeforeButtonText,
    beforeButtonText,
    buttonText,
    confirmUpdateStatusMessage,
  };
};

export default useDailyStatusLogic;
