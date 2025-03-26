import useConfirmUpdateCheckInOutStatus from "./hooks/use-confirm-update-check-in-out-status";
import useUpdateCheckInOutStatusResultSwalUseEffect from "./hooks/use-update-check-in-out-status-result-swal-use-effect";
import useDailyStatusLogic from "./hooks/use-daily-schedule-status-logic";

import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../../styles/button/button.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const DailyScheduleCheckInOutStatusCell = ({ row, value }) => {
  const {
    documentId,
    attributeToUpdate,
    shouldShowUpdateStatusButton,
    shouldShowBeforeButtonText,
    beforeButtonText,
    buttonText,
    confirmUpdateStatusMessage,
  } = useDailyStatusLogic(row, value);
  const { confirmUpdateCheckInOutStatus } = useConfirmUpdateCheckInOutStatus();
  useUpdateCheckInOutStatusResultSwalUseEffect();

  return (
    <>
      <CustomBalancedText>{value}</CustomBalancedText>
      {shouldShowUpdateStatusButton ? (
        <>
          {shouldShowBeforeButtonText ? (
            <>
              <BlackHr />
              <CustomBalancedText>{beforeButtonText}</CustomBalancedText>
            </>
          ) : null}

          <MinimalButton
            type="button"
            className="update"
            onClick={() =>
              confirmUpdateCheckInOutStatus(
                documentId,
                attributeToUpdate,
                confirmUpdateStatusMessage
              )
            }
          >
            {buttonText}
          </MinimalButton>
        </>
      ) : null}
    </>
  );
};

export default DailyScheduleCheckInOutStatusCell;
