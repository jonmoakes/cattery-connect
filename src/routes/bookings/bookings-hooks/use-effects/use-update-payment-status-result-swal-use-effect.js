import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetBookingsSelectors from "../../../../hooks/selectors/use-get-bookings-selectors";

import useUpdatePaymentStatusSuccessSwal from "../swals/use-update-payment-status-success-swal";
import useUpdatePaymentStatusErrorSwal from "../swals/use-update-payment-status-error-swal";

const useUpdatePaymentStatusResultSwalUseEffect = () => {
  const { updatePaymentStatusResult, updatePaymentStatusError } =
    useGetBookingsSelectors();
  const { updatePaymentStatusSuccessSwal } =
    useUpdatePaymentStatusSuccessSwal();
  const { updatePaymentStatusErrorSwal } = useUpdatePaymentStatusErrorSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updatePaymentStatusResult && !updatePaymentStatusError) return;

    if (updatePaymentStatusResult === "fulfilled") {
      updatePaymentStatusSuccessSwal();
    } else if (updatePaymentStatusError) {
      updatePaymentStatusErrorSwal(updatePaymentStatusError);
    }
  }, [
    dispatch,
    updatePaymentStatusResult,
    updatePaymentStatusError,
    updatePaymentStatusSuccessSwal,
    updatePaymentStatusErrorSwal,
  ]);
};

export default useUpdatePaymentStatusResultSwalUseEffect;
