import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../../hooks/selectors/use-get-send-email-selectors";

import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetUpdatePensDataSelectors from "../../../../hooks/selectors/use-get-update-pens-data-selectors";
import useSendEmailSentWithUpdatePensErrorSwal from "../swals/use-send-email-sent-with-update-pens-error-swal";
import useSendEmailSentWithDeleteBookingDataErrorSwal from "../swals/use-send-email-sent-with-delete-booking-data-error-swal";
import useEmailSentSuccessSwal from "../swals/use-email-sent-success-swal";
import useSendEmailErrorSwal from "../swals/use-send-email-error-swal";

const useCancelBookingSendEmailResultSwalUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const { deleteBookingDataResult, deleteBookingDataError } =
    useGetCancelBookingSelectors();
  const { updatePensDataError } = useGetUpdatePensDataSelectors();

  const { sendEmailSentWithUpdatePensErrorSwal } =
    useSendEmailSentWithUpdatePensErrorSwal();
  const { sendEmailSentWithDeleteBookingDataErrorSwal } =
    useSendEmailSentWithDeleteBookingDataErrorSwal();
  const { emailSentSuccessSwal } = useEmailSentSuccessSwal();
  const { sendEmailErrorSwal } = useSendEmailErrorSwal();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202 && updatePensDataError) {
      sendEmailSentWithUpdatePensErrorSwal();
    } else if (sendEmailStatusCode === 202 && deleteBookingDataError) {
      sendEmailSentWithDeleteBookingDataErrorSwal();
    } else if (
      sendEmailStatusCode === 202 &&
      deleteBookingDataResult === "fulfilled"
    ) {
      emailSentSuccessSwal();
    } else if (sendEmailError) {
      sendEmailErrorSwal(sendEmailError);
    }
  }, [
    deleteBookingDataError,
    deleteBookingDataResult,
    sendEmailStatusCode,
    updatePensDataError,
    emailSentSuccessSwal,
    sendEmailError,
    sendEmailErrorSwal,
    sendEmailSentWithDeleteBookingDataErrorSwal,
    sendEmailSentWithUpdatePensErrorSwal,
  ]);
};

export default useCancelBookingSendEmailResultSwalUseEffect;
