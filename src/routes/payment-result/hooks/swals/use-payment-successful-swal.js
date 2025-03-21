import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import useGetHandlePaymentSelectors from "../../../../hooks/selectors/use-get-handle-payment-selectors";
import { updateBookingPaymentStatusAsync } from "../../../../store/bookings/bookings.thunks";
import useFireSwal from "../../../../hooks/use-fire-swal";

const usePaymentSuccessfulSwal = () => {
  const { documentIdOfBooking } = useGetHandlePaymentSelectors();
  const { fireSwal } = useFireSwal();
  const [swalConfirmed, setSwalConfirmed] = useState(false);
  const dispatch = useDispatch();

  const paymentSuccessfulSwal = useCallback(() => {
    if (swalConfirmed) return;
    fireSwal(
      "success",
      "payment successful! please make sure to tap ok below as this will update the payment status of your booking to be completed.",
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        setSwalConfirmed(true);
        const documentId = documentIdOfBooking;
        dispatch(updateBookingPaymentStatusAsync({ documentId }));
      }
    });
  }, [fireSwal, dispatch, documentIdOfBooking, swalConfirmed]);

  return { paymentSuccessfulSwal };
};

export default usePaymentSuccessfulSwal;
