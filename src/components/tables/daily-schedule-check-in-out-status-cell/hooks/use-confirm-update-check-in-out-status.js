import { useDispatch } from "react-redux";

import { updateHasCheckedInOrOutInDbAsync } from "../../../../store/daily-schedule/daily-schedule.thunks";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";

const useConfirmUpdateCheckInOutStatus = () => {
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmUpdateCheckInOutStatus = (
    documentId,
    attributeToUpdate,
    confirmUpdateStatusMessage
  ) => {
    const confirmResult = () => {
      dispatch(
        updateHasCheckedInOrOutInDbAsync({
          documentId,
          attributeToUpdate,
        })
      );
    };

    //     const message =
    //       isCheckingInToday && !checkedInStatus
    //         ? `do you want to
    // <span style="color:${customYellow};">check in the cat(s)</span>?`
    //         : isCheckingInToday && checkedInStatus
    //         ? `do you want to set the cat(s) to be
    // <span style="color:${customYellow};">NOT checked in</span>?`
    //         : isCheckingOutToday && !checkedOutStatus
    //         ? `do you want to
    // <span style="color:${customYellow};">check out the cat(s)</span>?`
    //         : isCheckingOutToday && checkedOutStatus
    //         ? `do you want to set the cat(s) to be
    // <span style="color:${customYellow};">NOT checked out</span> ?`
    //         : "update status";

    confirmSwal(
      confirmUpdateStatusMessage,
      "",
      "confirm",
      "",
      confirmResult,
      null
    );
  };

  return { confirmUpdateCheckInOutStatus };
};

export default useConfirmUpdateCheckInOutStatus;
