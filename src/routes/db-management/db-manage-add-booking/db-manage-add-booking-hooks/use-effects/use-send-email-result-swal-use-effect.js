import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../../../hooks/selectors/use-get-send-email-selectors";
import useGetUpdatePensDataSelectors from "../../../../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import useFireSwal from "../../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../../../strings/routes";
import {
  pensUpdatedUploadBookingDataFailedEmailSentMessage,
  updatePenRollbackErrorEmailSentMessage,
} from "../../../../../strings/info";

const useSendEmailResultSwalUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const { uploadBookingDataError, uploadBookingDataResult } =
    useGetUploadBookingDataSelectors();
  const { updatePensDataError } = useGetUpdatePensDataSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202 && updatePensDataError) {
      fireSwal(
        "success",
        updatePenRollbackErrorEmailSentMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      });
    } else if (sendEmailStatusCode === 202 && uploadBookingDataError) {
      fireSwal(
        "success",
        pensUpdatedUploadBookingDataFailedEmailSentMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      });
    } else if (
      sendEmailStatusCode === 202 &&
      uploadBookingDataResult === "fulfilled"
    ) {
      fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        }
      );
    } else if (sendEmailError) {
      fireSwal(
        "error",
        `sorry,the email failed to send.. Please contact jonathan urgently. The error received was ${sendEmailError}`,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      });
    }
  }, [
    sendEmailStatusCode,
    sendEmailError,
    hamburgerHandlerNavigate,
    fireSwal,
    uploadBookingDataError,
    updatePensDataError,
    uploadBookingDataResult,
  ]);
};

export default useSendEmailResultSwalUseEffect;
