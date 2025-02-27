import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../../hooks/selectors/use-get-send-email-selectors";
import useGetUpdatePensDataSelectors from "../../../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

import useSendEmailSuccessWithUpdatePensErrorSwal from "../swals/use-send-email-success-with-update-pens-error-swal";
import useSendEmailSuccessWithUploadBookingDataErrorSwal from "../swals/use-send-email-success-with-upload-booking-data-error-swal";
import useSendEmailSuccessSwal from "../swals/use-send-email-success-swal";
import useSendEmailErrorSwal from "../swals/use-send-email-error-swal";

const useSendEmailResultSwalUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const { uploadBookingDataError, uploadBookingDataResult } =
    useGetUploadBookingDataSelectors();
  const { updatePensDataError } = useGetUpdatePensDataSelectors();

  const { sendEmailSuccessWithUpdatePensErrorSwal } =
    useSendEmailSuccessWithUpdatePensErrorSwal();
  const { sendEmailSuccessWithUploadBookingDataErrorSwal } =
    useSendEmailSuccessWithUploadBookingDataErrorSwal();
  const { sendEmailSuccessSwal } = useSendEmailSuccessSwal();
  const { sendEmailErrorSwal } = useSendEmailErrorSwal();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202 && updatePensDataError) {
      sendEmailSuccessWithUpdatePensErrorSwal();
    } else if (sendEmailStatusCode === 202 && uploadBookingDataError) {
      sendEmailSuccessWithUploadBookingDataErrorSwal();
    } else if (
      sendEmailStatusCode === 202 &&
      uploadBookingDataResult === "fulfilled"
    ) {
      sendEmailSuccessSwal();
    } else if (sendEmailError) {
      sendEmailErrorSwal(sendEmailError);
    }
  }, [
    updatePensDataError,
    uploadBookingDataError,
    uploadBookingDataResult,
    sendEmailError,
    sendEmailErrorSwal,
    sendEmailStatusCode,
    sendEmailSuccessSwal,
    sendEmailSuccessWithUpdatePensErrorSwal,
    sendEmailSuccessWithUploadBookingDataErrorSwal,
  ]);
};

export default useSendEmailResultSwalUseEffect;
