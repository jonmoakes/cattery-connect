import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import useGetHandlePaymentSelectors from "../../../../hooks/selectors/use-get-handle-payment-selectors";
import { updateBookingPaymentStatusAsync } from "../../../../store/bookings/bookings.thunks";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { paymentCompleteMessage } from "../../../../strings/info";

const usePaymentSuccessfulSwal = () => {
  const { documentIdOfBooking } = useGetHandlePaymentSelectors();
  const { fireSwal } = useFireSwal();
  const [swalConfirmed, setSwalConfirmed] = useState(false);
  const dispatch = useDispatch();

  const paymentSuccessfulSwal = useCallback(() => {
    if (swalConfirmed) return;
    fireSwal("success", paymentCompleteMessage, "", 4000, "", false, "", false);
    const documentId = documentIdOfBooking;
    dispatch(updateBookingPaymentStatusAsync({ documentId }));
    setSwalConfirmed(true);
  }, [fireSwal, dispatch, documentIdOfBooking, swalConfirmed]);

  return { paymentSuccessfulSwal };
};

export default usePaymentSuccessfulSwal;
