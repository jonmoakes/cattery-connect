import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetUpdatePaymentStatusResult } from "../../../../store/bookings/bookings.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import { paymentStatusUpdatedMessage } from "../../../../strings/info";

const useUpdatePaymentStatusSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const updatePaymentStatusSuccessSwal = useCallback(() => {
    fireSwal(
      "success",
      paymentStatusUpdatedMessage,
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetUpdatePaymentStatusResult());
      }
    });
  }, [dispatch, fireSwal]);

  return { updatePaymentStatusSuccessSwal };
};

export default useUpdatePaymentStatusSuccessSwal;
