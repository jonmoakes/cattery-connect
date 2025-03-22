import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { sendEmailFailedStatusUpdateAfterSuccessfulPaymentAsync } from "../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { paymentSuccessfulButStatusNotUpdatedMessage } from "../../../../strings/info";

const useErrorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const [swalConfirmed, setSwalConfirmed] = useState(false);

  const errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal =
    useCallback(
      (documentIdOfBooking) => {
        if (swalConfirmed) return;
        fireSwal(
          "info",
          paymentSuccessfulButStatusNotUpdatedMessage,
          "",
          0,
          "report error",
          false,
          "",
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            setSwalConfirmed(true);
            dispatch(
              sendEmailFailedStatusUpdateAfterSuccessfulPaymentAsync({
                documentIdOfBooking,
              })
            );
          }
        });
      },
      [fireSwal, dispatch, swalConfirmed]
    );

  return { errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal };
};

export default useErrorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal;
