import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../../hooks/selectors/use-get-send-email-selectors";
import useCancelBookingVariables from "../use-cancel-booking-variables";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { updatePenRollbackErrorEmailSentMessage } from "../../../../strings/info";
import { pensUpdatedDeleteBookingDataFailedEmailSentMessage } from "../../../../strings/info";
import { bookingsRoute, contactRoute } from "../../../../strings/routes";

const useCancelBookingSendEmailResultSwalUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const {
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataError,
  } = useCancelBookingVariables();

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
          hamburgerHandlerNavigate(bookingsRoute);
        }
      });
    } else if (sendEmailStatusCode === 202 && deleteBookingDataError) {
      fireSwal(
        "success",
        pensUpdatedDeleteBookingDataFailedEmailSentMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookingsRoute);
        }
      });
    } else if (
      sendEmailStatusCode === 202 &&
      deleteBookingDataResult === "fulfilled"
    ) {
      fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(bookingsRoute);
          }
        }
      );
    } else if (sendEmailError) {
      fireSwal(
        "error",
        `sorry,the email failed to send.. Please contact jonathan. The error received was: 

${sendEmailError}`,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(contactRoute);
        }
      });
    }
  }, [
    sendEmailStatusCode,
    sendEmailError,
    hamburgerHandlerNavigate,
    fireSwal,
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataError,
  ]);
};

export default useCancelBookingSendEmailResultSwalUseEffect;
