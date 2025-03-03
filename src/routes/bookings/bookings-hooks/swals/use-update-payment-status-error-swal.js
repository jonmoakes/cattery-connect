import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  resetUpdatePaymentStatusError,
  resetUpdatePaymentStatusResult,
} from "../../../../store/bookings/bookings.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors";

const useUpdatePaymentStatusErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const updatePaymentStatusErrorSwal = useCallback(
    (updatePaymentStatusError) => {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error updating the payment status.",
          updatePaymentStatusError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdatePaymentStatusResult());
          dispatch(resetUpdatePaymentStatusError());
        }
      });
    },
    [dispatch, fireSwal]
  );

  return { updatePaymentStatusErrorSwal };
};

export default useUpdatePaymentStatusErrorSwal;
