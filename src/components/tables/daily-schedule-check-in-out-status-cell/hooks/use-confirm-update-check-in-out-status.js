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
