import { useSelector } from "react-redux";

import { selectHandlePaymentSelectors } from "../../store/handle-payment/selectors";

const useGetHandlePaymentSelectors = () => {
  const {
    attemptPaymentIsLoading,
    documentIdOfBooking,
    paymentStatus,
    paymentError,
  } = useSelector(selectHandlePaymentSelectors);

  const dontHavePaymentResultYet = !paymentStatus;
  const noPaymentStatusAndError = !paymentStatus && !paymentError;
  const errorObject = (paymentStatus && paymentStatus.error) ?? null;

  return {
    attemptPaymentIsLoading,
    dontHavePaymentResultYet,
    noPaymentStatusAndError,
    documentIdOfBooking,
    paymentStatus,
    paymentError,
    errorObject,
  };
};

export default useGetHandlePaymentSelectors;
